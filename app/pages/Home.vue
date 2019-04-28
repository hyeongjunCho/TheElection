<template>
    <Page class="page" actionBarHidden="true" width="100%" height="100%" xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:svg="nativescript-svg" loaded="pageLoaded">
        <FixedAbsoluteLayout class="pageLayout" backgroundColor="#f0f0f0" width="100%" height="100%">
            <Label class="Dday" customTop="5%" customLeft="10%" v-model="Dday" />
            <Label class="places" textWrap="true" customTop="4.7%" customLeft="30%">
                <FormattedString>
                    <Span v-model="firstPlace"/>
                    <Span v-model="secondPlace"/>
                    <Span v-model="thirdPlace"/>
                    <Span v-model="fourthPlace"/>
                </FormattedString>
            </Label>
            <Button class="info rates" customTop="4.7%" customLeft="61.6%" text="Rates" textWrap="true" />
            <Button class="info status" customTop="11.7%" customLeft="61.6%" text="Status" textWrap="true" />
            <FixedAbsoluteLayout class="map" customTop="25%" customLeft="3.4%" width="93.2%" height="63.0%" backgroundColor="white">
                <SVGImage class="submap" src="~/static/image/Seoul.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Busan.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Daegu.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Incheon.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Gwangju.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Daejeon.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Ulsan.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Gyeonggi.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Gangwon.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/NorthChungcheong.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/SouthChungcheong.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/NorthJeolla.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/SouthJeolla.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/NorthGyeongsang.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/SouthGyeongsang.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Jeju.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/Sejong.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <SVGImage class="submap" src="~/static/image/test.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <Image class="submap" strecth="none" src="~/static/image/test.svg" width="100%" height="100%" customTop="0%" customLeft="0%" />
                <Image class="submap" strecth="none" src="~/static/image/triangle.png" width="100%" height="100%" customTop="0%" customLeft="0%" />
            </FixedAbsoluteLayout>
        </FixedAbsoluteLayout>
    </Page>
</template>

<script>
    export default {
        data: () => {
            return {
            };
        },
        created() {
        },
        components: {
        },
        computed: {
            Dday() {
                return "D-" + 10;
            },
            firstPlace() {
                return "1 " + 50 + "%\n";
            },
            secondPlace() {
                return "2 " + 30 + "%\n";
            },
            thirdPlace() {
                return "3 " + 10 + "%\n";
            },
            fourthPlace() {
                return "4 " + 5 + "%\n";
            },
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
            @return $number * 12;
        }
        @if (min-width: 733px) {
            @return $number * 11;
        }
        @if (min-width: 667px) {
            @return $number * 10;
        }
        @if (min-width: 600px) {
            @return $number * 9;
        }
        @if (min-width: 533px) {
            @return $number * 8;
        }
        @if (min-width: 467px) {
            @return $number * 7;
        }
        @if (min-width: 400px) {
            @return $number * 6;
        }
        @return $number * 5;
    }

    .Dday {
        font-size: em(1.4px);
        color: black;
    }

    .places {
        font-size: em(1px);
    }

    .page {
        position: relative;
    }

    .info {
        background-color: #f0f0f0;
        width: 20%;
        height: 6%;
        padding: 0;
        color: black;
        border-width: 1px 1px 1px 1px;
        border-radius: em(0.35px);
        font-size: em(1px);
        &:active {
            background-color: lightgray;
        }
    }

    .map {
        position: relative;
        .submap {
            z-index: 1;
        }
    }
</style>
