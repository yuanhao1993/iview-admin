<template>
    <div class="customermodel" ref="channel">
        <customer-list :customer_detail="detail"></customer-list>
    </div>
</template>

<script>
    import CustomerList from '@/views/customer/components/customerList';

    export default {
        name: 'channel-table',
        data() {
            return {
                detail: 'customerloan_desc'
            };
        },
        components: {CustomerList}
    };
</script>