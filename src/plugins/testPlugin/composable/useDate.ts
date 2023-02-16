import { ref, type Ref } from 'vue';

let dateTime: Ref = ref(null);

function setAndGetDateTime(dateTimeVal: never) {
    dateTime = dateTimeVal;
}

export default {
  dateTime,
  setAndGetDateTime
}
