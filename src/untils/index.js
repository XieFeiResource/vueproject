export const sortArray=function (result) {
  let tableData= new Array();
  let k=0;
  for(let i=0;i<result.length;i++){
    let len=result[i].courses.length
    for(let j=0;j<len;j++){
      let obj={}
      obj.stuName=result[i].stuName;
      obj.stuAge=result[i].stuAge;
      obj.course=result[i].courses[j].cname;
      obj.cgrade=result[i].courses[j].cgrade;
      tableData[k]=obj;
      k++
    }
  }
  return tableData;
}
