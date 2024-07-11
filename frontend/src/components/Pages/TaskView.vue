<template>

  <div>
    <h2 v-if="!taskEditId">Novo Evento</h2>
    <h2 v-else >Editar Evento</h2>
    <br>

    <div class="card">

      <div class="card-header" v-if="!eventEditId"><b>Preencha os dados para registrar:</b></div> 

        <div class="card-header" v-else><b>Preencha os dados para editar:</b></div> 

          <div class="row justify-content-center card-body">

          <div class="col-md-8">

            <div class="row">
            <!--Buttons of the forms - INI-->
              <div class="col-md-12">

                <div class="form-group">

                <label for="event_name">*Nome:</label>

                <input type="text" id="event_name"  class="form-control" required>

                </div>

              </div>

              <div class="col-md-12">

                <div class="form-group">

                  <label for="event_desc">Descrição:</label>

                  <textarea class="form-control" id="event_desc" rows="3" ></textarea>

                </div>

              </div>

            </div>

            <!--Buttons of the forms - END-->
            <br>
            <div class="row">

              <div class="col-md-4 offset-md-4 text-center">

                <button type="submit" class="btn btn-dark" >Salvar</button>

              </div>

            </div>

        </div>

      </div>

    </div>
  </div>


</template>
<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';
import ButtonLink from '@/components/Structure/ButtonLink.vue'; 


export default {
  components: {
    ButtonLink,
  },
  data() {
    return {
      tasks: [],
      type: 'tasks',
      taskEditId: ''
    };
  },
  mounted() {
    console.log(this.$route.params)
    this.taskEditId = this.$route.params.taskId;
    console.log(this.taskEditId);
    //this.tasks = this.search();
  },
  methods: {
    search(){
      axios.get(BACKEND_URL+this.type, {
      })
        .then(response => {
          if(response.status == 200){ 
            this.tasks = response.data;
          }
        })
        .catch(error => {
          this.errorMessage = error.response.tasks;
          if(this.errorMessage == undefined){

          } else {
            alert('Atenção! Erro ao carregar tasks! ' + this.errorMessage);
          }
        });
    }
  }
};
</script>

<style scoped>

</style>