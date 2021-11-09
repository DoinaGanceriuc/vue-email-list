/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */



const app = new Vue ({
    el: "#root",
    data: {
        randomMail: "",
        listRandomMail: []

    },
    mounted() {

        let i = 0;
        while (i < 10) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {            
                    this.randomMail = response.data.response
                    //console.log(this.randomMail);
                    if(!this.listRandomMail.includes(this.randomMail)) {
                        this.listRandomMail.push(this.randomMail)
                        //console.log(this.listRandomMail);
                    }
                    
             
        })
            
 
            i++;
        }
        

       
    }
})