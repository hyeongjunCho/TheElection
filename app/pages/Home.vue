<template>
    <Page class="page" actionBarHidden="true" width="100%" height="100%">
        <FixedAbsoluteLayout class="pageLayout" backgroundColor="#eeeeee" width="100%" height="100%">
            <Label customTop="1%" customLeft="1%" width="50%" height="50%" backgroundColor="#ffffff" />
            <Button class="info rates" customTop="4.7%" customLeft="61.6%" text="Rates" textWrap="true" />
            <Button class="info status" customTop="11.7%" customLeft="61.6%" text="Status" textWrap="true" />
        </FixedAbsoluteLayout>
    </Page>
</template>

<script>
    export default {
        components: {
        },
        computed: {
        },
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    @function em($number) {
        @if (min-width: 1080px) {
            @return $number * 14;
        }
        @if (min-width: 800px) {
            @return $number * 11;
        }
        @if (min-width: 600px) {
            @return $number * 9;
        }
        @if (min-width: 400px) {
            @return $number * 6;
        }
        @return $number * 5;
    }

    .page {
        position: relative;
    }

    .info {
        background-color: white;
        width: 20%;
        height: 6%;
        padding: 0;
        color: black;
        border-radius: 5px;
        font-size: em(1px);
        &:active {
            background-color: lightgray;
        }
    }
</style>
