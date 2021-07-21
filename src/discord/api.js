const APP_BASE_URL = 'https://visesole.com/'
const CLIENT_ID = '747814611402752000'
const CLIENT_SECRET = 'RLVSm00KxALRXf8HNzsreD5_8Fm17Lp5'
const REDIRECT_URL = `${APP_BASE_URL}callback`

const DiscordOauth2 = require('discord-oauth2')
const oauth = new DiscordOauth2({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URL,
})

export const discord_auth_url = oauth.generateAuthUrl({
  scope: ['identify', 'email'],
})
