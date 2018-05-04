<template>
    <div class="customer-desc">
        <customer-detail :id="customer"></customer-detail>
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
                customer: this.id
            };
        },
        props: ['id'],
        computed: {},
        methods: {}
    };
</script>
