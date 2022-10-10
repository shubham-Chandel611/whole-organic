export const Split_Text = (content, limit) => {   
  if(content.length > limit) {
    return content.substring(0, limit)+ '...';
  } else {
    return content;
  }
}