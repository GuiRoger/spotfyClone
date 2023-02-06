export const environment = {
  production:true
};

export const SpotifyConfiguration = {
  clientId:'be9c6262829648aa9b4dc002011a9e25',
  authEndpoint:'https://accounts.spotify.com/authorize',
  redirectUrl:'http://localhost:4200/login/',
  scopes:[
    "user-read-currently-playing", //Musica tocando agora
    "user-read-recently-played", //Ler musica tocada recentemente
    "user-read-playback-state", //Ler estado do player do usuário
    "user-top-read", //Top artistas e musicas do usuário
    "user-modify-playback-state", //Alterar player do usuário
    "user-library-read", //Ler biblioteca do usuário
    "playlist-read-private", //Ler playlist privadas
    "playlist-read-collaborative" //Ler playlist colaborativas
  ]
};
