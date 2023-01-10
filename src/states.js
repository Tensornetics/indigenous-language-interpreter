import { Machine } from 'xstate';

const states = Machine({
  id: 'indigenousLanguageInterpreter',
  initial: 'idle',
  context: {
    inputLanguage: '',
    outputLanguage: '',
    inputText: '',
    outputText: '',
    inputAudio: null,
    outputAudio: null,
    error: null,
  },
  states: {
    idle: {
      on: {
        SET_INPUT_LANGUAGE: {
          actions: ['setInputLanguage'],
        },
        SET_OUTPUT_LANGUAGE: {
          actions: ['setOutputLanguage'],
        },
        SET_INPUT_TEXT: {
          actions: ['setInputText'],
        },
        SET_INPUT_AUDIO: {
          actions: ['setInputAudio'],
        },
        TRANSLATE: {
          target: 'translating',
          actions: ['translate'],
        },
        SYNTHESIZE_SPEECH: {
          target: 'synthesizing',
          actions: ['synthesizeSpeech'],
        },
      },
    },
    translating: {
      invoke: {
        id: 'translate',
        src: 'translateText',
        onDone: {
          target: 'idle',
          actions: ['setOutputText'],
        },
        onError: {
          target: 'idle',
          actions: ['setError'],
        },
      },
    },
    synthesizing: {
      invoke: {
        id: 'synthesize',
        src: 'synthesizeSpeech',
        onDone: {
          target: 'idle',
          actions: ['setOutputAudio'],
        },
        onError: {
          target: 'idle',
          actions: ['setError'],
        },
      },
    },
  },
});

export default states;
