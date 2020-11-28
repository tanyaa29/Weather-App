const submitBtn = document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val= document.getElementById('temp');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault()
    let cityval= cityName.value;
    if(cityval===""){
        city_name.innerText=`Please enter the name of any city`
        datahide.classList.add('data_hide');
    }else{
        try{
        let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=30dcb28e825672ea87cfff7d8aa11c39`;

        const response= await fetch(url);
        const data= await response.json();
        const arrData= [data];

        city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText= arrData[0].main.temp;
        
        const tempMood= arrData[0].weather[0].main;

        if(tempMood=="clear"){
            temp_status.innerHTML=
            "<i class='fa fa-sun' style='color: #eccc68;'></i>";
        } else if(tempMood=="Clouds"){
            temp_status.innerHTML=
            "<i class= 'fa fa-cloud' style='color: #f1f2f6;'></i>";
        }
         else if(tempMood=="Rain"){
            temp_status.innerHTML=
            "<i class= 'fa fa-cloud-rain' style='color: #a4b0be;'></i>";
        }
         else{
            temp_status.innerHTML=
            "<i class= 'fa fa-cloud' style='color: #f1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText=`Please enter a valid cityname`
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);