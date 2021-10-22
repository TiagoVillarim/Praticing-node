// hambiente de desenvolvimento
const env = process.env.NODE_ENV || 'dev';


const config = () => {
  switch (env) {
    case 'dev': 
    return {
      bd_string: 'mongodb+srv://Tiago_villarim:villa134679@clusterapi.rdlsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      jwt_pass: 'villa1234',
      token_expiresIn: '3d'
    }
    case 'hml':
    return {
      bd_string: 'mongodb+srv://Tiago_villarim:villa134679@clusterapi.rdlsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      jwt_pass: 'villa1234',
      token_expiresIn: '3d'
    }
    case 'prod':
    return {
      bd_string: 'mongodb+srv://Tiago_villarim:villa134679@clusterapi.rdlsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      jwt_pass: 'villa1234',
      token_expiresIn: '3d'
    }  
  }
}

console.log(`iniciando a api em ${env.toUpperCase()}`);

module.exports = config();