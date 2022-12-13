
$('document').ready(function(){

const avgMood = false;

// if avgMood = false, manually select (one) mood to equal true
// if avgMood = true, a mood will be selected based on the probabilities of its occurrence

// High Positive
let Inner_Phi // = true
;
let Insightful // = true
;
let Adventurous  = true
;
let Happy // = true
;
let Passionate // = true
;
let Energetic // = true
;

// Low Positive
let Peaceful // = true
;
let Hopeful // = true
;
let Calm // = true
;
let Life_Stock_Green // = true
;

// High Negative 
let Resentment // = true 
;
let Mad // = true
;
let Life_Stock_Red // = true
;

// Low Negative
let Regret // = true
;
let Sorrow // = true
;
let Fearful // = true
;
let Confused // = true
;


const myAvgMood = (values) => {
    let i, pickedValue,
            randomNr = Math.random(),
            threshold = 0;

    for (i = 0; i < values.length; i++) {
        if (values[i].probability === '*') {
            continue;
        }

        threshold += values[i].probability;
        if (threshold > randomNr) {
                pickedValue = values[i].value;
                break;
        }

        if (!pickedValue) {
            //nothing found based on probability value, so pick element marked with wildcard
            pickedValue = values.filter((value) => value.probability === '*');
        }
    }

    return pickedValue;
}

let testValues = [{
    value : 'Inner_Phi',
    probability: 0.18
},
{
    value : 'Insightful',
    probability: 0.18
},
{
    value : 'Adventurous',
    probability: 0.07
},
{
    value : 'Happy',
    probability: 0.11
},
{
    value : 'Passionate',
    probability: 0.01
},
{
    value : 'Energetic',
    probability: 0.02
},
{
    value : 'Peaceful',
    probability: 0.07
},
{
    value : 'Hopeful',
    probability: 0.04
},
{
    value : 'Calm',
    probability: 0.14
},
{
    value : 'Life_Stock_Green',
    probability: 0.06
},
{
    value : 'Resentment',
    probability: 0.01
},
{
    value : 'Mad',
    probability: 0.01
},
{
    value : 'Life_Stock_Red',
    probability: 0.02
},
{
    value : 'Regret',
    probability: 0.01
},
{
    value : 'Sorrow',
    probability: 0.02
},
{
    value : 'Fearful',
    probability: 0.01
},
{
    value : 'Confused',
    probability: 0.04
}]



// var randomMood = Math.floor(Math.random() * moods.length);
// let myCurrMood = moods[randomMood];

if (avgMood == true) {
  let myCurrMood = myAvgMood(testValues);
  console.log(myCurrMood);

  if (myCurrMood == 'Inner_Phi') {
    Inner_Phi = true;
  } else if (myCurrMood == 'Insightful') {
    Insightful = true;
  } else if (myCurrMood == 'Adventurous') {
    Adventurous = true;
  } else if (myCurrMood == 'Happy') {
    Happy = true;
  } else if (myCurrMood == 'Passionate') {
    Passionate = true;
  } else if (myCurrMood == 'Peaceful') {
    Peaceful = true;
  } else if (myCurrMood == 'Hopeful') {
    Hopeful = true;
  } else if (myCurrMood == 'Calm') {
    Calm = true;
  } else if (myCurrMood == 'Life_Stock_Green') {
    Life_Stock_Green = true;
  } else if (myCurrMood == 'Resentment') {
    Resentment = true;
  } else if (myCurrMood == 'Mad') {
    Mad = true;
  } else if (myCurrMood == 'Life_Stock_Red') {
    Life_Stock_Red = true;
  } else if (myCurrMood == 'Regret') {
    Regret = true;
  } else if (myCurrMood == 'Sorrow') {
    Sorrow = true;
  } else if (myCurrMood == 'Fearful') {
    Fearful = true;
  } else if (myCurrMood == 'Confused') {
    Confused = true;
  } else if (myCurrMood == 'Energetic') {
    Energetic = true;
  } else {

  }
}





  if (Inner_Phi == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BGolden%20Ratio%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BGolden%20Ratio%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BGolden%20Ratio%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BGolden%20Ratio%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BGolden%20Ratio%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BGolden%20Ratio%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Inner &#x03D5;</span>';

    document.getElementById('golden-ratio-mood').style.opacity = ".2";
    document.getElementById('golden-ratio-mood-title').style.fontWeight = "600";
    document.getElementById('golden-ratio-mood-title').style.color = "black";
  }


  else if (Insightful == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BInsightful%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BInsightful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BInsightful%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BInsightful%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BInsightful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BInsightful%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Insightful</span>';

    document.getElementById('insightful-mood').style.opacity = ".2";
    document.getElementById('insightful-mood-title').style.fontWeight = "600";
    document.getElementById('insightful-mood-title').style.color = "black";
  }

  else if (Adventurous == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BAdventurous%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BAdventurous%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BAdventurous%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BAdventurous%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BAdventurous%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BAdventurous%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Adventurous</span>';

    document.getElementById('adventurous-mood').style.opacity = ".2";
    document.getElementById('adventurous-mood-title').style.fontWeight = "600";
    document.getElementById('adventurous-mood-title').style.color = "black";
  }


  else if (Happy == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BHappy%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHappy%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHappy%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BHappy%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHappy%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHappy%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Happy</span>';

    document.getElementById('happy-mood').style.opacity = ".2";
    document.getElementById('happy-mood-title').style.fontWeight = "600";
    document.getElementById('happy-mood-title').style.color = "black";
  }


  else if (Passionate == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BPassionate%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPassionate%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPassionate%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BPassionate%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPassionate%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPassionate%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Passionate</span>';

    document.getElementById('passionate-mood').style.opacity = ".2";
    document.getElementById('passionate-mood-title').style.fontWeight = "600";
    document.getElementById('passionate-mood-title').style.color = "black";
  }


  else if (Peaceful == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BPeaceful%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPeaceful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPeaceful%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BPeaceful%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPeaceful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BPeaceful%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Peaceful</span>';

    document.getElementById('peaceful-mood').style.opacity = ".2";
    document.getElementById('peaceful-mood-title').style.fontWeight = "600";
    document.getElementById('peaceful-mood-title').style.color = "black";
  }


  else if (Hopeful == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BHopeful%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHopeful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHopeful%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BHopeful%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHopeful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BHopeful%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Hopeful</span>';

    document.getElementById('hopeful-mood').style.opacity = ".2";
    document.getElementById('hopeful-mood-title').style.fontWeight = "600";
    document.getElementById('hopeful-mood-title').style.color = "black";
  }


  else if (Calm == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BCalm%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BCalm%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BCalm%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BCalm%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BCalm%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BCalm%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Calm</span>';

    document.getElementById('calm-mood').style.opacity = ".2";
    document.getElementById('calm-mood-title').style.fontWeight = "600";
    document.getElementById('calm-mood-title').style.color = "black";
  }


  else if (Life_Stock_Green == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BLife%20as%20a%20Stock%5D%5BGreen%20Long%20term%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BG%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BG%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BLife%20as%20a%20Stock%5D%5BGreen%20Long%20term%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BG%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BG%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Life Stock [G]</span>';
  
    document.getElementById('life-stock-green-mood').style.opacity = ".2";
    document.getElementById('life-stock-green-mood-title').style.fontWeight = "600";
    document.getElementById('life-stock-green-mood-title').style.color = "black";
  }


  else if (Resentment == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BResentment%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BResentment%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BResentment%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BResentment%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BResentment%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BResentment%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Resentment</span>';

    document.getElementById('resentment-mood').style.opacity = ".2";
    document.getElementById('resentment-mood-title').style.fontWeight = "600";
    document.getElementById('resentment-mood-title').style.color = "black";
  }


  else if (Mad == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BMad%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BMad%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BMad%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BMad%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BMad%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BMad%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Mad</span>';

    document.getElementById('mad-mood').style.opacity = ".2";
    document.getElementById('mad-mood-title').style.fontWeight = "600";
    document.getElementById('mad-mood-title').style.color = "black";
  }


  else if (Life_Stock_Red == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BLife%20as%20a%20Stock%5D%5BRed%20Long%20term%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BR%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BR%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BLife%20as%20a%20Stock%5D%5BRed%20Long%20term%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BR%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BLife%20Stock%5D%5BR%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Life Stock [R]</span>';
  
    document.getElementById('life-stock-red-mood').style.opacity = ".2";
    document.getElementById('life-stock-red-mood-title').style.fontWeight = "600";
    document.getElementById('life-stock-red-mood-title').style.color = "black";
  }


  else if (Regret == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BRegret%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BRegret%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BRegret%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BRegret%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BRegret%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BRegret%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Regret</span>';

    document.getElementById('regret-mood').style.opacity = ".2";
    document.getElementById('regret-mood-title').style.fontWeight = "600";
    document.getElementById('regret-mood-title').style.color = "black";
  }


  else if (Sorrow == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BSorrow%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BSorrow%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BSorrow%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BSorrow%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BSorrow%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BSorrow%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Sorrow</span>';

    document.getElementById('sorrow-mood').style.opacity = ".2";
    document.getElementById('sorrow-mood-title').style.fontWeight = "600";
    document.getElementById('sorrow-mood-title').style.color = "black";
  }


  else if (Fearful == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BFearful%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BFearful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BFearful%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BFearful%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BFearful%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BFearful%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Fearful</span>';

    document.getElementById('fearful-mood').style.opacity = ".2";
    document.getElementById('fearful-mood-title').style.fontWeight = "600";
    document.getElementById('fearful-mood-title').style.color = "black";
  }


  else if (Confused == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BConfused%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BConfused%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BConfused%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BConfused%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BConfused%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BConfused%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Confused</span>';

    document.getElementById('confused-mood').style.opacity = ".2";
    document.getElementById('confused-mood-title').style.fontWeight = "600";
    document.getElementById('confused-mood-title').style.color = "black";
  }


  else if (Energetic == true) {
    resetMood();
    document.getElementById('mood-selector-header').innerHTML = '<video class="current-mood-header" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BEnergetic%5D.png" preload="auto" loop autoplay defaultMuted playsinline muted><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BEnergetic%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BEnergetic%5D.mov" type="video/quicktime"></video>';

    document.getElementById('mood-selector').innerHTML = '<video id="current-mood" poster="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/Mood%20%5BSmall%5D%5BTrans%5D%5BAura%5D%5BEnergetic%5D.png" preload="auto" autoplay loop  defaultMuted playsinline muted style=""><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BEnergetic%5D_VP9.webm" type="video/webm"><source src="https://storage.googleapis.com/guerin/Mood%20%5BAura%5D%20Working/%5BAura%5D%5BEnergetic%5D.mov" type="video/quicktime"></video><span class="bottom-current-mood-title">Energetic</span>';

    document.getElementById('energetic-mood').style.opacity = ".2";
    document.getElementById('energetic-mood-title').style.fontWeight = "600";
    document.getElementById('energetic-mood-title').style.color = "black";
  } else {
    
  }


  function resetMood() {
    document.getElementById('golden-ratio-mood').style.opacity = "";
    document.getElementById('golden-ratio-mood-title').style.fontWeight = "";
    document.getElementById('golden-ratio-mood-title').style.color = "";

    document.getElementById('insightful-mood').style.opacity = "";
    document.getElementById('insightful-mood-title').style.fontWeight = "";
    document.getElementById('insightful-mood-title').style.color = "";

    document.getElementById('adventurous-mood').style.opacity = "";
    document.getElementById('adventurous-mood-title').style.fontWeight = "";
    document.getElementById('adventurous-mood-title').style.color = "";

    document.getElementById('happy-mood').style.opacity = "";
    document.getElementById('happy-mood-title').style.fontWeight = "";
    document.getElementById('happy-mood-title').style.color = "";

    document.getElementById('passionate-mood').style.opacity = "";
    document.getElementById('passionate-mood-title').style.fontWeight = "";
    document.getElementById('passionate-mood-title').style.color = "";

    document.getElementById('peaceful-mood').style.opacity = "";
    document.getElementById('peaceful-mood-title').style.fontWeight = "";
    document.getElementById('peaceful-mood-title').style.color = "";

    document.getElementById('hopeful-mood').style.opacity = "";
    document.getElementById('hopeful-mood-title').style.fontWeight = "";
    document.getElementById('hopeful-mood-title').style.color = "";

    document.getElementById('calm-mood').style.opacity = "";
    document.getElementById('calm-mood-title').style.fontWeight = "";
    document.getElementById('calm-mood-title').style.color = "";

    document.getElementById('life-stock-green-mood').style.opacity = "";
    document.getElementById('life-stock-green-mood-title').style.fontWeight = "";
    document.getElementById('life-stock-green-mood-title').style.color = "";

    document.getElementById('resentment-mood').style.opacity = "";
    document.getElementById('resentment-mood-title').style.fontWeight = "";
    document.getElementById('resentment-mood-title').style.color = "";

    document.getElementById('mad-mood').style.opacity = "";
    document.getElementById('mad-mood-title').style.fontWeight = "";
    document.getElementById('mad-mood-title').style.color = "";

    document.getElementById('life-stock-red-mood').style.opacity = "";
    document.getElementById('life-stock-red-mood-title').style.fontWeight = "";
    document.getElementById('life-stock-red-mood-title').style.color = "";

    document.getElementById('regret-mood').style.opacity = "";
    document.getElementById('regret-mood-title').style.fontWeight = "";
    document.getElementById('regret-mood-title').style.color = "";

    document.getElementById('sorrow-mood').style.opacity = "";
    document.getElementById('sorrow-mood-title').style.fontWeight = "";
    document.getElementById('sorrow-mood-title').style.color = "";

    document.getElementById('fearful-mood').style.opacity = "";
    document.getElementById('fearful-mood-title').style.fontWeight = "";
    document.getElementById('fearful-mood-title').style.color = "";

    document.getElementById('confused-mood').style.opacity = "";
    document.getElementById('confused-mood-title').style.fontWeight = "";
    document.getElementById('confused-mood-title').style.color = "";

    document.getElementById('energetic-mood').style.opacity = "";
    document.getElementById('energetic-mood-title').style.fontWeight = "";
    document.getElementById('energetic-mood-title').style.color = "";
  }




  // setTimeout(arguments.callee, 40000);
  setTimeout(arguments.callee, 15000);

});
