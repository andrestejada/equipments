export const formatDate =(date:Date | string)=>{
  const language = 'es-CO'; 
  const formatDate = new Date(date).toLocaleDateString(language,{
    year:'numeric',
    month:'long',
    day:'numeric'
  });
  
  return formatDate;
};