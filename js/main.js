let weight_parcels= [];
let amount_parcels = 0;
let total_weight_parcels = 0;
let weight_current_parcel;
let button;

window.onload = function() {
    document.getElementById('weight_parcel').value = '';
    weight_parcels =[];
    amount_parcels = 0;
    total_weight_parcels = 0;
    weight_current_parcel = 0;
    }


if(document.getElementById("weight_parcel") != null){

    document.getElementById("submit").addEventListener('click', function (event) {
    
        weight_current_parcel = document.getElementById("weight_parcel").value;
        total_weight_parcels = 0;

        Number(weight_current_parcel);
        console.log("weight_current_parcel" + weight_current_parcel);
        if(isNaN(weight_current_parcel)){
            document.getElementById('message_parcel').innerHTML = 'Mettez un poids sous un format numérique';
        }
        else{

            weight_parcels.push(weight_current_parcel);
            console.log(weight_parcels);
            amount_parcels++;

            if(amount_parcels>=3){
                document.getElementById('message_parcel').innerHTML = "Limite du nombre de colis atteinte, impossible d'ajouter un colis en plus ";
                button = document.querySelector('button')
                button.disabled = true
            }

            for(let i=0; i<weight_parcels.length; i++){
                total_weight_parcels = total_weight_parcels + Number(weight_parcels[i]);
            }

            if(total_weight_parcels>=500){
                document.getElementById('message_parcel').innerHTML = 'Limite de poids atteinte, transport impossible';
            }


            document.getElementById('total_weight').innerHTML = total_weight_parcels;


            console.log(total_weight_parcels)
        }
    
    
        event.preventDefault();
    });
}

