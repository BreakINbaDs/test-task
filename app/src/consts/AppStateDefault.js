export const APP_STATE_DEFAULT = {
    persons: [],
    person: {
      name: '',
      phone: [{
          label: '',
          value: '',
          primary: false
      }],
        first_name: '',
        last_name: '',
        org_name: '',
        org_id: {
          address: ''
        },
        email: [{
          label: '',
          value: '',
            primary: false
        }],
        visible_to: null,
        add_time: ''
    },
    pagination: {
        start: 0,
        limit: 10,
        more_items_in_collection: false,
        next_start: 0,
    },
    loader: {
        isLoading: false
    },
    personView: {
        isOpened: false
    },
    personCreateForm: {
        isOpened: false
    },
    error: {}
};