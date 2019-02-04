export const APP_STATE_DEFAULT = {
    persons: [],
    person: {
      name: '',
      phone: [{
            value: ''
      }],
        first_name: '',
        last_name: '',
        org_name: '',
        org_id: {
          address: ''
        },
        email: [{
          value: ''
        }]
    },
    pagination: {
        start: 0,
        limit: 10,
        more_items_in_collection: true,
        next_start: 10,
    },
    error: {}
};