import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  CLEAR_CONTACTS,
  SET_CURRENT_CONTACT,
  SHOW_CONTACT,
  HIDE_CONTACT,
  SHOW_MODAL,
  HIDE_MODAL,
  SET_EDIT_MODE,
  SET_CREATE_MODE
} from './types'

export default {
  state: {
    contacts: [
      {
        id: "1",
        name: "Nijat Dursunlu",
        tel: "+994 51 361 30 25",
        email: "nicat.durunlu@gmail.com",
        address: "68343 Hovde Trail",
        image: "http://nijatdursunlu.me/assets/images/image-3.jpg",
        date: 1615619165689
      },
      {
        id: "2",
        name: "Lisetta Pymar",
        tel: "352-314-3406",
        email: "fbullene0@adobe.com",
        address: "851 Russell Center",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
      },
      {
        id: "3",
        name: "Eugene Handman",
        tel: "203-468-4662",
        email: "tehandman1@china.com.cn",
        address: "88764 Messerschmidt Court",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
      {
        id: "4",
        name: "Aldric Fake",
        tel: "859-744-6240",
        email: "tafake2@tmall.com",
        address: "68343 Hovde Trail",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "5",
        name: "Aldric Fake",
        tel: "859-744-6240",
        email: "tafake2@tmall.com",
        address: "8069 Johnson Crossing",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
      {
        id: "6",
        name: "Sharia Livesley",
        tel: "608-826-2182",
        email: "slivesley3@hubpages.com",
        address: "4 Kings Way",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "7",
        name: "Myron Cracker",
        tel: "625-367-0988",
        email: "mycracker4@ets.com",
        address: "68343 Hovde Trail",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
      {
        id: "8",
        name: "Charlotte Elijah",
        tel: "425-417-9149",
        email: "celijah6@sciencedaily.com",
        address: "50 Dorton Lane",
        date: 1615619165689,
        image:
          "https://images.unsplash.com/photo-1542131596-dea5384842c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
    ],
    currentContact: {},
    contactVisible: false,
    modalVisible: false,
    editMode: false
  },
  mutations: {
    ADD_CONTACT: (state, payload) => {
      state.contacts.unshift(payload)
    },
    DELETE_CONTACT: (state, payload) => {
      const index = state.contacts.map(contact => contact.id).indexOf(payload.id);
      state.contacts.splice(index, 1);
    },
    EDIT_CONTACT: (state, payload) => {
      const { id, name, tel, email, address, image, date } = payload;
      const index = state.contacts.map(contact => contact.id).indexOf(id);
      state.contacts[index] = {
        name, tel, email, address, date,
        image: image === "undefined" ? "" : image
      }
      console.log("index", index);
    },
    CLEAR_CONTACTS: (state) => {
      const contacts = state.contacts
      contacts.splice(0, contacts.length)
    },
    SET_CURRENT_CONTACT: (state, payload) => {
      state.currentContact = payload
    },
    SHOW_CONTACT: (state) => {
      state.contactVisible = true
    },
    HIDE_CONTACT: (state) => {
      state.contactVisible = false
    },
    SHOW_MODAL: (state) => {
      state.modalVisible = true
    },
    HIDE_MODAL: (state) => {
      state.modalVisible = false
    },
    SET_EDIT_MODE: (state) => {
      state.editMode = true
    },
    SET_CREATE_MODE: (state) => {
      state.editMode = false
    },
  },
  actions: {
    ADD_CONTACT: (context, payload) => {
      context.commit(ADD_CONTACT, payload)
    },
    DELETE_CONTACT: (context, payload) => {
      context.commit(DELETE_CONTACT, payload)
    },
    EDIT_CONTACT: (context, payload) => {
      context.commit(EDIT_CONTACT, payload)
    },
    CLEAR_CONTACTS: (context) => {
      context.commit(CLEAR_CONTACTS)
    },
    SET_CURRENT_CONTACT: (context, payload) => {
      context.commit(SET_CURRENT_CONTACT, payload)
    },
    SHOW_CONTACT: (context) => {
      context.commit(SHOW_CONTACT)
    },
    HIDE_CONTACT: (context) => {
      context.commit(HIDE_CONTACT)
    },
    SHOW_MODAL: (context) => {
      context.commit(SHOW_MODAL)
    },
    HIDE_MODAL: (context) => {
      context.commit(HIDE_MODAL)
    },
    SET_EDIT_MODE: (context) => {
      context.commit(SET_EDIT_MODE)
    },
    SET_CREATE_MODE: (context) => {
      context.commit(SET_CREATE_MODE)
    }
  },
  getters: {
    getAllContacts(state) {
      console.log("state.contacts ", state.contacts);
      return state.contacts
    },
    getCurrentContact(state) {
      return state.currentContact
    },
    getContactVisible: (state) => state.contactVisible,
    getFirstLetter(state) {
      const name = state.currentContact.name;
      return [name[0], name[name.indexOf(" ") + 1]];
    },
    getModalVisible: (state) => state.modalVisible,
    getDate(state) {
      const dateObject = new window.Date(state.currentContact.date);
      let day = dateObject.getDate();
      let month = dateObject.getMonth() + 1;
      let year = dateObject.getFullYear();
      return String(day) + "." + String(month) + "." + String(year);
    },
    getEditMode: (state) => state.editMode,
  }
}
