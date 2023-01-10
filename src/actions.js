export const setInputLanguage = (context, event) => {
  context.inputLanguage = event.inputLanguage;
};

export const setOutputLanguage = (context, event) => {
  context.outputLanguage = event.outputLanguage;
};

export const setInputText = (context, event) => {
  context.inputText = event.inputText;
};

export const setInputAudio = (context, event) => {
  context.inputAudio = event.inputAudio;
};

export const setOutputText = (context, event) => {
  context.outputText = event.data;
};

export const setOutputAudio = (context, event) => {
  context.outputAudio = event.data;
};

export const setError = (context, event) => {
  context.error = event.data;
};

export const translate = (context, event) => {
  const { inputLanguage, outputLanguage, inputText } = context;
  return {
    inputLanguage,
    outputLanguage,
    inputText,
  };
};

export const synthesizeSpeech = (context, event) => {
  const { outputLanguage, outputText } = context;
  return {
    outputLanguage,
    outputText,
  };
};
