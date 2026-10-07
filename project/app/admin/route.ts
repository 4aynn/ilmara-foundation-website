import { getChatGPTUser, chatGPTSignInPath } from '../chatgpt-auth';
export async function GET(request: Request) {
  const user = await getChatGPTUser();
  return Response.redirect(new URL(user ? '/#admin' : chatGPTSignInPath('/admin'), request.url), 302);
}
