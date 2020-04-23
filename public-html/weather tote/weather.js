
function getweather(){
  $(document).ready(function(){
    $.getJSON("http://35.246.123.101/api/platform", function(data1){
    document.getElementById("sub_weather").innerHTML=""
    console.log(data1.longitude)
    console.log(data1.latitude)
    
    $.getJSON("http://35.246.123.101/api/weather?latitude="+data1.latitude+"&longitude="+data1.longitude, function(data){
        document.getElementById("sub_weather").innerHTML="" 
        var weather_info='';
        console.log(data)

            weather_info += '<tr>';
            weather_info += '<td>'+"latitude : "+data1.latitude +" , Longitude : "+ data1.longitude+'</td>';
            weather_info += '<td>'+data.Temp+'</td>';
            weather_info += '<td>'+data.WindSpeed+'</td>';
            weather_info += '<td>'+data.WindDegree+'</td>';
            weather_info += '<td>'+data.Humidity+'</td>';
            weather_info += '<td>'+data.Pressure+'</td>';
            weather_info += '<td>'+data.Visibility+'</td>';
            weather_info += '<td>'+data.Cloud+'</td>';
            weather_info += '</tr>';
            

        $('#main_weather').append(weather_info);
      });
  });
  })
  }
  $(document).ready(function(){
    $.getJSON("http://35.246.123.101/api/platform", function(data1){
    document.getElementById("sub_weather").innerHTML=""
    console.log(data1.longitude)
    console.log(data1.latitude)
    
    $.getJSON("http://35.246.123.101/api/weather?latitude="+data1.latitude+"&longitude="+data1.longitude, function(data){
        document.getElementById("sub_weather").innerHTML="" 
        var weather_info='';
        console.log(data.WindDegree)
          weather_info += '<tr>';
          weather_info += '<td>'+"latitude : "+data1.latitude +" , Longitude : "+ data1.longitude+'</td>';
          weather_info += '<td>'+data.Temp+'</td>';
          weather_info += '<td>'+data.WindSpeed+'</td>';
          weather_info += '<td>'+data.WindDegree+'</td>';
          weather_info += '<td>'+data.Humidity+'</td>';
          weather_info += '<td>'+data.Pressure+'</td>';
          weather_info += '<td>'+data.Visibility+'</td>';
          weather_info += '<td>'+data.Cloud+'</td>';
          weather_info += '</tr>';
          
        $('#main_weather').append(weather_info);
      });
  });
  })