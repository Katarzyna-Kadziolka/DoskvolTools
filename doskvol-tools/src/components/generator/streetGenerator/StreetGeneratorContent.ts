import type {TableData} from "@/components/common/baseTable/TableData";
import {useI18n} from 'vue-i18n'

export function useStreetGenerator() {
    const {t} = useI18n({useScope: "global"});
    function getMood(): TableData {
        return {
            title: t("streets.mood.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 1
                    },
                    values: [
                        t("streets.mood.1.1"),
                        t("streets.mood.1.2"),
                        t("streets.mood.1.3"),
                        t("streets.mood.1.4"),
                        t("streets.mood.1.5"),
                        t("streets.mood.1.6"),
                    ],
                }
            ]
        }
    }

    function getImpressionsSights(): TableData {
        return {
            title: t("streets.impressions-sights.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 1
                    },
                    values: [
                        t("streets.impressions-sights.1.1"),
                        t("streets.impressions-sights.1.2"),
                        t("streets.impressions-sights.1.3"),
                        t("streets.impressions-sights.1.4"),
                        t("streets.impressions-sights.1.5"),
                        t("streets.impressions-sights.1.6"),
                    ],
                }
            ]
        }
    }

    function getImpressionsSounds(): TableData {
        return {
            title: t("streets.impressions-sounds.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 1
                    },
                    values: [
                        t("streets.impressions-sounds.1.1"),
                        t("streets.impressions-sounds.1.2"),
                        t("streets.impressions-sounds.1.3"),
                        t("streets.impressions-sounds.1.4"),
                        t("streets.impressions-sounds.1.5"),
                        t("streets.impressions-sounds.1.6"),
                    ],
                }
            ]
        }
    }

    function getImpressionsSmells(): TableData {
        return {
            title: t("streets.impressions-smells.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 1
                    },
                    values: [
                        t("streets.impressions-smells.1.1"),
                        t("streets.impressions-smells.1.2"),
                        t("streets.impressions-smells.1.3"),
                        t("streets.impressions-smells.1.4"),
                        t("streets.impressions-smells.1.5"),
                        t("streets.impressions-smells.1.6"),
                    ],
                }
            ]
        }
    }

    function getUse(): TableData {
        return {
            title: t("streets.use.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 3
                    },
                    values: [
                        t("streets.use.1.1"),
                        t("streets.use.1.2"),
                        t("streets.use.1.3"),
                        t("streets.use.1.4"),
                        t("streets.use.1.5"),
                        t("streets.use.1.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 4,
                        to: 5
                    },
                    values: [
                        t("streets.use.2.1"),
                        t("streets.use.2.2"),
                        t("streets.use.2.3"),
                        t("streets.use.2.4"),
                        t("streets.use.2.5"),
                        t("streets.use.2.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 6,
                        to: 6
                    },
                    values: [
                        t("streets.use.3.1"),
                        t("streets.use.3.2"),
                        t("streets.use.3.3"),
                        t("streets.use.3.4"),
                        t("streets.use.3.5"),
                        t("streets.use.3.6"),
                    ],
                }
            ]
        }
    }

    function getType(): TableData {
        return {
            title: t("streets.type.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 3
                    },
                    values: [
                        t("streets.type.1.1"),
                        t("streets.type.1.2"),
                        t("streets.type.1.3"),
                        t("streets.type.1.4"),
                        t("streets.type.1.5"),
                        t("streets.type.1.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 4,
                        to: 5
                    },
                    values: [
                        t("streets.type.2.1"),
                        t("streets.type.2.2"),
                        t("streets.type.2.3"),
                        t("streets.type.2.4"),
                        t("streets.type.2.5"),
                        t("streets.type.2.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 6,
                        to: 6
                    },
                    values: [
                        t("streets.type.3.1"),
                        t("streets.type.3.2"),
                        t("streets.type.3.3"),
                        t("streets.type.3.4"),
                        t("streets.type.3.5"),
                        t("streets.type.3.6"),
                    ],
                }
            ]
        }
    }

    function getDetails(): TableData {
        return {
            title: t("streets.details.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 1
                    },
                    values: [
                        t("streets.details.1.1"),
                        t("streets.details.1.2"),
                        t("streets.details.1.3"),
                        t("streets.details.1.4"),
                        t("streets.details.1.5"),
                        t("streets.details.1.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 2,
                        to: 2
                    },
                    values: [
                        t("streets.details.2.1"),
                        t("streets.details.2.2"),
                        t("streets.details.2.3"),
                        t("streets.details.2.4"),
                        t("streets.details.2.5"),
                        t("streets.details.2.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 3,
                        to: 3
                    },
                    values: [
                        t("streets.details.3.1"),
                        t("streets.details.3.2"),
                        t("streets.details.3.3"),
                        t("streets.details.3.4"),
                        t("streets.details.3.5"),
                        t("streets.details.3.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 4,
                        to: 4
                    },
                    values: [
                        t("streets.details.4.1"),
                        t("streets.details.4.2"),
                        t("streets.details.4.3"),
                        t("streets.details.4.4"),
                        t("streets.details.4.5"),
                        t("streets.details.4.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 5,
                        to: 5
                    },
                    values: [
                        t("streets.details.5.1"),
                        t("streets.details.5.2"),
                        t("streets.details.5.3"),
                        t("streets.details.5.4"),
                        t("streets.details.5.5"),
                        t("streets.details.5.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 6,
                        to: 6
                    },
                    values: [
                        t("streets.details.6.1"),
                        t("streets.details.6.2"),
                        t("streets.details.6.3"),
                        t("streets.details.6.4"),
                        t("streets.details.6.5"),
                        t("streets.details.6.6"),
                    ],
                },
            ]
        }
    }

    function getProps(): TableData {
        return {
            title: t("streets.props.title"),
            rows: [
                {
                    diceResult: {
                        from: 1,
                        to: 1
                    },
                    values: [
                        t("streets.props.1.1"),
                        t("streets.props.1.2"),
                        t("streets.props.1.3"),
                        t("streets.props.1.4"),
                        t("streets.props.1.5"),
                        t("streets.props.1.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 2,
                        to: 2
                    },
                    values: [
                        t("streets.props.2.1"),
                        t("streets.props.2.2"),
                        t("streets.props.2.3"),
                        t("streets.props.2.4"),
                        t("streets.props.2.5"),
                        t("streets.props.2.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 3,
                        to: 3
                    },
                    values: [
                        t("streets.props.3.1"),
                        t("streets.props.3.2"),
                        t("streets.props.3.3"),
                        t("streets.props.3.4"),
                        t("streets.props.3.5"),
                        t("streets.props.3.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 4,
                        to: 4
                    },
                    values: [
                        t("streets.props.4.1"),
                        t("streets.props.4.2"),
                        t("streets.props.4.3"),
                        t("streets.props.4.4"),
                        t("streets.props.4.5"),
                        t("streets.props.4.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 5,
                        to: 5
                    },
                    values: [
                        t("streets.props.5.1"),
                        t("streets.props.5.2"),
                        t("streets.props.5.3"),
                        t("streets.props.5.4"),
                        t("streets.props.5.5"),
                        t("streets.props.5.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 6,
                        to: 6
                    },
                    values: [
                        t("streets.props.6.1"),
                        t("streets.props.6.2"),
                        t("streets.props.6.3"),
                        t("streets.props.6.4"),
                        t("streets.props.6.5"),
                        t("streets.props.6.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 7,
                        to: 7
                    },
                    values: [
                        t("streets.props.7.1"),
                        t("streets.props.7.2"),
                        t("streets.props.7.3"),
                        t("streets.props.7.4"),
                        t("streets.props.7.5"),
                        t("streets.props.7.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 8,
                        to: 8
                    },
                    values: [
                        t("streets.props.8.1"),
                        t("streets.props.8.2"),
                        t("streets.props.8.3"),
                        t("streets.props.8.4"),
                        t("streets.props.8.5"),
                        t("streets.props.8.6"),
                    ],
                },
                {
                    diceResult: {
                        from: 9,
                        to: 9
                    },
                    values: [
                        t("streets.props.9.1"),
                        t("streets.props.9.2"),
                        t("streets.props.9.3"),
                        t("streets.props.9.4"),
                        t("streets.props.9.5"),
                        t("streets.props.9.6"),
                    ],
                },
            ]
        }
    }

    return {
        getMood,
        getImpressionsSights,
        getImpressionsSounds,
        getImpressionsSmells,
        getUse,
        getType,
        getDetails,
        getProps
    }
}