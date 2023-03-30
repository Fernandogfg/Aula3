try{
  try{
    try{
      throw "msg de erro"
    }catch(error){
      console.log(error + ' primeiro catch');
      throw error
    }
  }catch(error){
    console.log(error + ' segundo catch');
    throw error
  }
}catch(error){
  console.error(error);
}

// SEGUNDO EXERCICIO
try{
  console.log('iniciando processo');
  throw new Error('error')
}catch(error){
  console.error(error);
}finally{
  console.log('Fim do processo');
}