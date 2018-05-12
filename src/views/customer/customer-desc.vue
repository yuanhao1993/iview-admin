<template>
    <div class="customer-desc">
        <customer-detail :id="id"></customer-detail>
    </div>
</template>

<script>
    // import {loadCustomerById} from '@/api/customer';
    import customerDetail from '@/views/customer/components/customerDetail';

    export default {
        components: {
            customerDetail
        },
        data() {
            return {
                id: this.id
            };
        },
        props: ['id'],
        computed: {},
        methods: {}
    };
</script>
