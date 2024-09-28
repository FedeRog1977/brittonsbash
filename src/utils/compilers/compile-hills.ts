import { brittonsBashContentFacade } from '../../implementations';

const hills = await brittonsBashContentFacade.getHills();

export const compileHills = () => hills;
