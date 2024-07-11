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
      <tr v-for="(task, task_id) in tasks" :key="task_id">
        <td>{{ task.task_name }}</td>
        <td>{{ task.task_desc }}</td>
        <td>{{ task.task_end }}</td>
        <td>
          <img v-show="userId == task.user_id" src="/icons/icon-edit.svg" alt="Editar" title="Editar" @click="editEvent(task.task_id)">
          <img v-show="userId == task.user_id" src="/icons/icon-trash.svg" alt="Deletar" title="Deletar" @click="deleteEvent(task.task_id)">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ButtonLink from '@/components/Structure/ButtonLink.vue'; 

export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
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
