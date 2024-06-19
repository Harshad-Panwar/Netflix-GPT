import OpenAI from 'openai';
import { OPENAI_API } from './constants';

const openai = new OpenAI({
  apiKey: process.env[REACT_APP_OPENAI_API],
});

export default openai;