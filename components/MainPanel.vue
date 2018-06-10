<template>
  <div id="main">
    <Toolbar></Toolbar>
    <div id="widgetOverview">
      <ul>
        <li class="">
          <label for="addEntry" class="material-icons">add</label>
          <Input @keyup.native.enter="addTask" v-model="newEntry" type="text" placeholder="add entry"></Input>
        </li>
        <li class="push">
          <icon>search</icon>
        </li>
        <li class="">
          <icon>filter_list</icon>
        </li>
      </ul>
    </div>
    <div id="widgetContent" class="">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Toolbar from '@/components/Toolbar';
import Icon from '@/components/Icon';
import List from '@/components/List';
import Input from '@/components/Input';
// import { firestore } from '@/services/firebase';

export default {
  async asyncData ({ store }) {
  },
  name: '',
  data: () => ({
    newEntry: '',
  }),
  created() {
    // let recognition;
    // if (!('webkitSpeechRecognition' in window)) {
    //   // upgrade();
    // } else {
    //   const grammar = '#JSGF V1.0; grammar colors; public <color> = add | delete | edit;';
    //   recognition = new webkitSpeechRecognition(); // eslint-disable-line
    //   var speechRecognitionList = new webkitSpeechGrammarList(); // eslint-disable-line
    //   speechRecognitionList.addFromString(grammar, 1);
    //   recognition.grammars = speechRecognitionList;
    //   recognition.continuous = true;
    //   recognition.interimResults = false;
    //   recognition.lang = 'de';
    //
    //   recognition.onstart = () => { console.log('SpeechRecognition started'); };
    //   recognition.onresult = this.logSpeechCommand;
    //   recognition.onerror = (event) => { console.log('SpeechRecognition error', event); };
    //   recognition.onend = () => { recognition.start(); };
    // }
    // recognition.start();
  },
  methods: {
    parseCommand(transcript) {
      const commands = ['neuer Eintrag', 'Eintrag löschen', 'öffnen', 'Eintrag abschließen', 'abschließen', 'Eintrag bearbeiten'];
      // const com = commands.filter(entry => transcript.toUpperCase().match(entry.toUpperCase()));
      // console.log('Command: ', com);
      // if (com.length) {
      //   const regex = new RegExp(com[0], 'gi');
      //   const rest = transcript.replace(regex, '');
      //   this.triggerCommand(com[0], rest);
      // }
    },
    triggerCommand(command, rest) {
      console.log('command', command);
      console.log('rest', rest);
      switch (command) {
        case 'neuer Eintrag':
          this.addTask(rest);
          break;
        case 'Eintrag löschen':
          this.deleteTask(rest);
          break;
        case 'Eintrag bearbeiten':

          break;
        case 'Eintrag abschließen':
          this.completeTask(rest);
          break;
        case 'abschließen':
          this.completeTask(rest);
          break;
        case 'öffnen':
          this.uncompleteTask(rest);
          break;
        default:
      }
    },
    logSpeechCommand(event) {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) { // eslint-disable-line
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      // finalTranscript = capitalize(finalTranscript);
      console.log('interim', interimTranscript);
      console.log('final', finalTranscript);
      console.log('confidence', event.results[event.results.length - 1][0].confidence);
      if (event.results[event.results.length - 1][0].confidence > 0.6) {
        this.parseCommand(finalTranscript);
      }
      // final_span.innerHTML = linebreak(finalTranscript);
      // interim_span.innerHTML = linebreak(interimTranscript);
    },
    addTask(text) {
      const title = typeof text === 'string' ? text.trim() : this.newEntry;
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(title)
        .set({
          title,
        })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    deleteTask(text) {
      const title = typeof text === 'string' ? text.trim() : this.newEntry;
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(title)
        .delete()
        .then((docRef) => {
          console.log('Document written with ID: ', docRef);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    completeTask(text) {
      const title = typeof text === 'string' ? text.trim() : this.newEntry;
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(title)
        .update({
          completed: true,
        })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    uncompleteTask(text) {
      const title = typeof text === 'string' ? text.trim() : this.newEntry;
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(title)
        .update({
          completed: false,
        })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
  },
  components: {
    Toolbar, Icon, List, Input,
  },
};
</script>
<style scoped>
#widgetContent {
  margin: 0 4vw;
}
.content {
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, .4);
  background-color: white;
/*   border: 1px solid #999; */
/*   padding: 10px; */
  color: black;
}
#main{
  display: flex;
  flex-direction: column;
  position: relative;
}
@media only screen and (max-width: 600px) {
  input {
    display: none;
  }
  #main {
    /* width: 100vw; */
    background-size: 100% 60vh;
  }
}
#main::before{
  content: '';
  position: fixed;
  width: 100%;
  height: 40vh;
  min-height: 400px;
  background: url('https://thumbs.dreamstime.com/t/banni%C3%A8re-fonc%C3%A9e-bleue-63554171.jpg');
  background-size: 100% 100%;
  background-position: 00px -100px;
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(2px);
}
#widgetOverview ul li.push {
  margin-left: auto;
  margin-right: 0;
}
#widgetOverview {
  margin: 50px 4vw 0px;
/*   padding: 10px; */
  font-size: 18px;
  line-height: 18px;
  color: white;
}

#widgetOverview ul {
  display: flex;
  justify-content: left;
  padding: 0;
}
#widgetOverview ul li {
  line-height: 24px;
  padding: 10px 0vw;
  margin-right: 10px;
  display: flex;
  cursor: pointer;
}
#widgetOverview ul li i {
  margin-right: 10px;
}
.trash {
  margin-top: 50px;
}
</style>
