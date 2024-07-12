<template>

  <div>
      <h2 class="text-center">Lista de Tarefas</h2>
  
      <div class="d-flex justify-content-center align-items-center mb-3">
        <span>Status: </span>
        <select class="form-select form-select-sm" id="task_end" style="width: auto;" @change="searchTasks($event.target.value)">
          <option value="0">Todos</option>
          <option value="True">Concluídas</option>
          <option value="False">Pendentes</option>
        </select>
 
      </div>
    <div>
      <TableTask :tasks="tasks" @edit-event="handleEditTask" @delete-event="handleDeleteTask" :deletedTasks="deletedTasks"/>
    </div>
  </div>


</template>
<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';
import ButtonLink from '@/components/Structure/ButtonLink.vue'; 
import TableTask  from '@/components/Structure/TableTask.vue'; 


export default {
  components: {
    ButtonLink,
    TableTask
  },
  data() {
    return {
      tasks: [],
      deletedTasks: [],
      type: 'tasks'
    };
  },
  mounted() {
    console.log(BACKEND_URL+this.type);
    this.tasks = this.searchTasks();
    this.tasks = null;
  },
  methods: {
    searchTasks(iStatus = ''){
      axios.get(BACKEND_URL+this.type, {
        params: {
        status: iStatus
    }
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
    }, 
    handleEditTask(taskId) {
      this.$router.push({ name: 'task', params: { taskId: taskId } });
    },
    handleDeleteTask(taskId) {
      axios.delete(BACKEND_URL+this.type+'/'+taskId, {
      })
        .then(response => {
          if(response.status == 200){ 
            alert(response.data.message)
            this.deletedTasks.push(taskId)
          } 
        })
        .catch(error => {
          this.errorMessage = error.response.tasks;
          if(this.errorMessage == undefined){

          } else {
            alert('Atenção! Erro ao deletar task! ' + this.errorMessage);
          }
        });
    }
  }
};
</script>

<style scoped>

</style>