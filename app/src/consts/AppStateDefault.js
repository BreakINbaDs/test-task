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
        picture_id: null,
        visible_to: null,
        add_time: '',
        '4af767b021868564752ea8d2b45c6af363237d6e': ''
    },
    pagination: {
        start: 0,
        limit: 20,
        more_items_in_collection: false,
        next_start: 0,
    },
    loader: {
        isLoading: true
    },
    personView: {
        isOpened: false
    },
    personCreateForm: {
        isOpened: false
    },
    organizations: [],
    error: {}
};