import type { NextApiRequest, NextApiResponse } from 'next'


const verifyCaptcha = async (token) => {
  const captchaSecret = process.env.CAPTCHA_SECRET;
  const data = {
    secret: captchaSecret,
    response: token,
  }

  const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  const options = {
    method: 'POST',
    mode: 'cors' as RequestMode,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody
  }

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, options);
  const result = await response.json();

  return result.success;
}

const submitUnbanRequest = async () => {
  const apiKey = process.env.API_KEY;
  const data = {

  }

  const options = {
    method: 'POST',
    mode: 'cors' as RequestMode,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': apiKey as string
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(`https://mod.esfans.net/api/discord/unbans/esfandtv`, options);
  const status = response.status;
  
  if (status == 200 || status == 201)
    return true;
  else
    return false;
}

export default async function Unban(req: NextApiRequest, res: NextApiResponse) {

  const emailRegex = new RegExp('/^\S+@\S+\.\S+$/');
  const discordRegex = new RegExp('^.{3,32}#[0-9]{4}$');

  let success = await verifyCaptcha(req.body.token);
  if (!success) {
    res.status(500).json({ message: 'An error occurred when submitting the unban request. Try again later or contact a moderator.'});
    return;
  }
   
  
  // check for valid data
  const reqData = req.body;
  if (reqData.email == null || reqData.email == '' || reqData.email == undefined || reqData.discordTag == null || reqData.discordTag == '' || reqData.discordTag == undefined
      || reqData.banRange == null || reqData.banRange == '' || reqData.banRange == undefined || reqData.reason == null || reqData.reason == '' || reqData.reason == undefined) {
        res.status(400).json({ message: 'Missing request data'});
        return;
      }

  // regex email and username
  if (!emailRegex.test(reqData.email)) {
    res.status(400).json({ message: 'An invalid email was entered in the request. Try another email or contact a moderator.'});
    return;
  }
    

  if (!discordRegex.test(reqData.discordTag)) {
    res.status(400).json({ message: 'An invalid username was entered in the request. Include the 4 digit identifier or contact a moderator.'});
    return;
  }
    
    submitUnbanRequest().then(result => {
      success = result;
    })

    if (success)
      res.status(201);
    else
      res.status(500);
}