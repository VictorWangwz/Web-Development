var scores=[1,2,3,4,5];
average(scores);
function average(num){
    var sum=0;
    for(var i=0;i<num.length;i++)
    {
        sum+=num[i];
    }
    var average=sum/num.length;
    console.log (average);
}