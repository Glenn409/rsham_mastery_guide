$( document ).ready(function(){
    
    $("#hp-slider").simpleSlider("setValue",.50)
})





$("#hp-slider").bind("slider:changed", function (event, data) {
    
    // The currently selected value of the slider
    $('#percent').html(Math.round(data.value * 100) + "%")
  
    // The value as a ratio of the slider (between 0 and 1)
  });

  $('button').click(function(e){
    e.preventDefault()
    let gs1_intellect = $('#gs1-intellect').val()
    let gs1_verse = $('#gs1-verse').val()
    let gs1_mastery = $('#gs1-mastery').val()
    let gs1_crit = $('#gs1-crit').val()
    let hp_percent = Math.round($('#hp-slider').val())

    if(isNaN(gs1_crit) === false && isNaN(gs1_mastery) === false && isNaN(gs1_verse) === false && isNaN(gs1_intellect) === false){
     
        let effective_mastery = 
        console.log(effective_mastery)
        let hs_val = healingsurge(gs1_intellect,gs1_verse,effective_mastery)
        


        $('#hs').html('Healing Surge: ' + Math.round(hs_val))

    } else {
        console.log('eat ass')
    }

  })

  function healingsurge(intel,verse,effective_mastery){
    let spell_calculation = (intel * 2.48)
    let verse_healing = spell_calculation + (spell_calculation * verse / 100)
    let effective_mastery_added = verse_healing + (verse_healing * effective_mastery)
    return effective_mastery_added
  }