import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function InfoBox ({infoofweather}) {
        const Init_Url = "https://images.unsplash.com/photo-1504194104404-433180773017?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
        const Rain_Url = "https://images.unsplash.com/photo-1508556919487-845f191e5742?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        const Hot_Url = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        const Cold_Url = "https://images.unsplash.com/photo-1542267207-f8127b454605?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

       const { temperature,humidity,tempmax,tempmin,feelsLike,weather,city} = infoofweather
    return(
        <div className="infobox flex justify-center text-center">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={humidity > 80 ? Rain_Url : temperature > 15 ? Hot_Url:Cold_Url}
        title="green iguana"
      />
    <CardContent>
        <Typography gutterBottom variant="div" component="span">
          <h1>{city}</h1>
        </Typography>
        <Typography  variant="body2" component="span" sx={{ color: 'text.secondary' }}>
       <p> Temprature : {temperature}&deg;C  </p>   
       <p> Min-Temprature : {tempmin}&deg;C </p>
       <p> Max-Temprature : {tempmax}&deg;C </p>
       <p> Humidity : {humidity} </p>
       <p> The Weather Can Be Describe As {weather} and feels like {feelsLike}&deg;C  </p>
        </Typography>
      </CardContent>
    </Card>
       
        </div>
    )
}


export default InfoBox