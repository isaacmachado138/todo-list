<template>
  <table v-show="tasks !== undefined" class="table rounded-circle">
    <thead>
      <tr>
        <th scope="col" class="header-tasks">Nome</th>
        <th scope="col" class="header-tasks">Descrição</th>
        <th scope="col" class="header-tasks">Concluída</th>
        <th scope="col" class="header-tasks">
          <ButtonLink link="/task" color="purple" label="Novo" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, task_id) in tasks" :key="task_id" :class="{ 'd-none': deletedTasks.includes(task.task_id) }">
        <td>{{ task.task_name }}</td>
        <td>{{ task.task_desc }}</td>
        <td class="align-middle"><input type="checkbox" :checked="task.task_end" @change="updateTask(task)"> <img :id="'success' + task.task_id"  class="d-none" style="vertical-align: text-top;" src="/success.png" width="15px"> </td>
        <td>
          <img v-show="task.task_end == false" src="/icons/icon-edit.svg" alt="Editar" title="Editar" @click="editEvent(task.task_id)">
          <img src="/icons/icon-trash.svg" alt="Deletar" title="Deletar" @click="deleteEvent(task.task_id)">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';
import { BACKEND_URL } from '/configAmbiente';
import ButtonLink from '@/components/Structure/ButtonLink.vue'; 

export default {
  data() {
    return {
      type: 'tasks'
    };
  },
  props: {
    tasks: {
      type: Array,
      required: true
    },
    deletedTasks: Array
  },
  components: {
    ButtonLink
  },
  methods: {
    editEvent(taskId) {
      this.$emit('edit-event', taskId);
    },
    deleteEvent(taskId) {
      this.$emit('delete-event', taskId);
    },
    updateTask(task) {
      const updatedTask = {
        task_id: task.task_id,
        task_name: task.task_name,
        task_desc: task.task_desc,
        task_end: !task.task_end  // Inverte o estado atual do checkbox 
      };

      axios.put(BACKEND_URL + this.type + '/' + task.task_id, updatedTask)
        .then(response => {
          if (response.status === 200) { 
            task.task_end = updatedTask.task_end;

            // Mostrar a imagem temporariamente
            document.getElementById('success' + task.task_id).classList.remove('d-none');

            // Após 4 segundos, ocultar a imagem novamente
            setTimeout(() => {
              document.getElementById('success' + task.task_id).classList.add('d-none');
            }, 4000); // 4000 milissegundos = 4 segundos

          }
        })
        .catch(error => {
          this.errorMessage = error.response.data;
          alert('Atenção! Erro ao atualizar tarefa! ' + this.errorMessage);          
        });
    }
  }
};
</script>

<style scoped>
.table {
  width: 80%;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
