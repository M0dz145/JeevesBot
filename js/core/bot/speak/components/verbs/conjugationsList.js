import conjugation from "./conjugation"

const CONJUGATIONS_LIST = [
    new conjugation({
        "-name": "pla:cer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "cer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ce"},
                    {"i": "ces"},
                    {"i": "ce"},
                    {"i": "çons"},
                    {"i": "cez"},
                    {"i": "cent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "çais"},
                    {"i": "çais"},
                    {"i": "çait"},
                    {"i": "cions"},
                    {"i": "ciez"},
                    {"i": "çaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "cerai"},
                    {"i": "ceras"},
                    {"i": "cera"},
                    {"i": "cerons"},
                    {"i": "cerez"},
                    {"i": "ceront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "çai"},
                    {"i": "ças"},
                    {"i": "ça"},
                    {"i": "çâmes"},
                    {"i": "çâtes"},
                    {"i": "cèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "cerais"},
                    {"i": "cerais"},
                    {"i": "cerait"},
                    {"i": "cerions"},
                    {"i": "ceriez"},
                    {"i": "ceraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ce"},
                    {"i": "ces"},
                    {"i": "ce"},
                    {"i": "cions"},
                    {"i": "ciez"},
                    {"i": "cent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "çasse"},
                    {"i": "çasses"},
                    {"i": "çât"},
                    {"i": "çassions"},
                    {"i": "çassiez"},
                    {"i": "çassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ce"},
                    {"i": "çons"},
                    {"i": "cez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "çant"}
            },
            "past-participle": {
                "p": [
                    {"i": "cé"},
                    {"i": "cés"},
                    {"i": "cée"},
                    {"i": "cées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "référenci:er",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "er"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "erai"},
                    {"i": "eras"},
                    {"i": "era"},
                    {"i": "erons"},
                    {"i": "erez"},
                    {"i": "eront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ai"},
                    {"i": "as"},
                    {"i": "a"},
                    {"i": "âmes"},
                    {"i": "âtes"},
                    {"i": "èrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "erais"},
                    {"i": "erais"},
                    {"i": "erait"},
                    {"i": "erions"},
                    {"i": "eriez"},
                    {"i": "eraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "asse"},
                    {"i": "asses"},
                    {"i": "ât"},
                    {"i": "assions"},
                    {"i": "assiez"},
                    {"i": "assent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "é"},
                    {"i": "és"},
                    {"i": "ée"},
                    {"i": "ées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "dép:ecer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ecer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ece",
                            "èce"
                        ]
                    },
                    {
                        "i": [
                            "eces",
                            "èces"
                        ]
                    },
                    {
                        "i": [
                            "ece",
                            "èce"
                        ]
                    },
                    {"i": "eçons"},
                    {"i": "ecez"},
                    {
                        "i": [
                            "ecent",
                            "ècent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "eçais"},
                    {"i": "eçais"},
                    {"i": "eçait"},
                    {"i": "ecions"},
                    {"i": "eciez"},
                    {"i": "eçaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "ecerai",
                            "ècerai"
                        ]
                    },
                    {
                        "i": [
                            "eceras",
                            "èceras"
                        ]
                    },
                    {
                        "i": [
                            "ecera",
                            "ècera"
                        ]
                    },
                    {
                        "i": [
                            "ecerons",
                            "ècerons"
                        ]
                    },
                    {
                        "i": [
                            "ecerez",
                            "ècerez"
                        ]
                    },
                    {
                        "i": [
                            "eceront",
                            "èceront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "eçai"},
                    {"i": "eças"},
                    {"i": "eça"},
                    {"i": "eçâmes"},
                    {"i": "eçâtes"},
                    {"i": "ecèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ecerais",
                            "ècerais"
                        ]
                    },
                    {
                        "i": [
                            "ecerais",
                            "ècerais"
                        ]
                    },
                    {
                        "i": [
                            "ecerait",
                            "ècerait"
                        ]
                    },
                    {
                        "i": [
                            "ecerions",
                            "ècerions"
                        ]
                    },
                    {
                        "i": [
                            "eceriez",
                            "èceriez"
                        ]
                    },
                    {
                        "i": [
                            "eceraient",
                            "èceraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ece",
                            "èce"
                        ]
                    },
                    {
                        "i": [
                            "eces",
                            "èces"
                        ]
                    },
                    {
                        "i": [
                            "ece",
                            "èce"
                        ]
                    },
                    {"i": "ecions"},
                    {"i": "eciez"},
                    {
                        "i": [
                            "ecent",
                            "ècent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "eçasse"},
                    {"i": "eçasses"},
                    {"i": "eçât"},
                    {"i": "eçassions"},
                    {"i": "eçassiez"},
                    {"i": "eçassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {
                        "i": [
                            "ece",
                            "èce"
                        ]
                    },
                    {"i": "eçons"},
                    {"i": "ecez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "eçant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ecé"},
                    {"i": "ecés"},
                    {"i": "ecée"},
                    {"i": "ecées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "man:ger",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ger"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ge"},
                    {"i": "ges"},
                    {"i": "ge"},
                    {"i": "geons"},
                    {"i": "gez"},
                    {"i": "gent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "geais"},
                    {"i": "geais"},
                    {"i": "geait"},
                    {"i": "gions"},
                    {"i": "giez"},
                    {"i": "geaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "gerai"},
                    {"i": "geras"},
                    {"i": "gera"},
                    {"i": "gerons"},
                    {"i": "gerez"},
                    {"i": "geront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "geai"},
                    {"i": "geas"},
                    {"i": "gea"},
                    {"i": "geâmes"},
                    {"i": "geâtes"},
                    {"i": "gèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "gerais"},
                    {"i": "gerais"},
                    {"i": "gerait"},
                    {"i": "gerions"},
                    {"i": "geriez"},
                    {"i": "geraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ge"},
                    {"i": "ges"},
                    {"i": "ge"},
                    {"i": "gions"},
                    {"i": "giez"},
                    {"i": "gent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "geasse"},
                    {"i": "geasses"},
                    {"i": "geât"},
                    {"i": "geassions"},
                    {"i": "geassiez"},
                    {"i": "geassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ge"},
                    {"i": "geons"},
                    {"i": "gez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "geant"}
            },
            "past-participle": {
                "p": [
                    {"i": "gé"},
                    {"i": "gés"},
                    {"i": "gée"},
                    {"i": "gées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "pa:yer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "yer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ie",
                            "ye"
                        ]
                    },
                    {
                        "i": [
                            "ies",
                            "yes"
                        ]
                    },
                    {
                        "i": [
                            "ie",
                            "ye"
                        ]
                    },
                    {"i": "yons"},
                    {"i": "yez"},
                    {
                        "i": [
                            "ient",
                            "yent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "ierai",
                            "yerai"
                        ]
                    },
                    {
                        "i": [
                            "ieras",
                            "yeras"
                        ]
                    },
                    {
                        "i": [
                            "iera",
                            "yera"
                        ]
                    },
                    {
                        "i": [
                            "ierons",
                            "yerons"
                        ]
                    },
                    {
                        "i": [
                            "ierez",
                            "yerez"
                        ]
                    },
                    {
                        "i": [
                            "ieront",
                            "yeront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "yai"},
                    {"i": "yas"},
                    {"i": "ya"},
                    {"i": "yâmes"},
                    {"i": "yâtes"},
                    {"i": "yèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ierais",
                            "yerais"
                        ]
                    },
                    {
                        "i": [
                            "ierais",
                            "yerais"
                        ]
                    },
                    {
                        "i": [
                            "ierait",
                            "yerait"
                        ]
                    },
                    {
                        "i": [
                            "ierions",
                            "yerions"
                        ]
                    },
                    {
                        "i": [
                            "ieriez",
                            "yeriez"
                        ]
                    },
                    {
                        "i": [
                            "ieraient",
                            "yeraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ie",
                            "ye"
                        ]
                    },
                    {
                        "i": [
                            "ies",
                            "yes"
                        ]
                    },
                    {
                        "i": [
                            "ie",
                            "ye"
                        ]
                    },
                    {"i": "yions"},
                    {"i": "yiez"},
                    {
                        "i": [
                            "ient",
                            "yent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yasse"},
                    {"i": "yasses"},
                    {"i": "yât"},
                    {"i": "yassions"},
                    {"i": "yassiez"},
                    {"i": "yassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {
                        "i": [
                            "ie",
                            "ye"
                        ]
                    },
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": [
                    {"i": "yé"},
                    {"i": "yés"},
                    {"i": "yée"},
                    {"i": "yées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "netto:yer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "yer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "yons"},
                    {"i": "yez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ierai"},
                    {"i": "ieras"},
                    {"i": "iera"},
                    {"i": "ierons"},
                    {"i": "ierez"},
                    {"i": "ieront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "yai"},
                    {"i": "yas"},
                    {"i": "ya"},
                    {"i": "yâmes"},
                    {"i": "yâtes"},
                    {"i": "yèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ierais"},
                    {"i": "ierais"},
                    {"i": "ierait"},
                    {"i": "ierions"},
                    {"i": "ieriez"},
                    {"i": "ieraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yasse"},
                    {"i": "yasses"},
                    {"i": "yât"},
                    {"i": "yassions"},
                    {"i": "yassiez"},
                    {"i": "yassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ie"},
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": [
                    {"i": "yé"},
                    {"i": "yés"},
                    {"i": "yée"},
                    {"i": "yées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "grasse:yer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "yer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ye"},
                    {"i": "yes"},
                    {"i": "ye"},
                    {"i": "yons"},
                    {"i": "yez"},
                    {"i": "yent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "yerai"},
                    {"i": "yeras"},
                    {"i": "yera"},
                    {"i": "yerons"},
                    {"i": "yerez"},
                    {"i": "yeront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "yai"},
                    {"i": "yas"},
                    {"i": "ya"},
                    {"i": "yâmes"},
                    {"i": "yâtes"},
                    {"i": "yèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "yerais"},
                    {"i": "yerais"},
                    {"i": "yerait"},
                    {"i": "yerions"},
                    {"i": "yeriez"},
                    {"i": "yeraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ye"},
                    {"i": "yes"},
                    {"i": "ye"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yasse"},
                    {"i": "yasses"},
                    {"i": "yât"},
                    {"i": "yassions"},
                    {"i": "yassiez"},
                    {"i": "yassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ye"},
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": [
                    {"i": "yé"},
                    {"i": "yés"},
                    {"i": "yée"},
                    {"i": "yées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "app:eler",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eler"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "elle"},
                    {"i": "elles"},
                    {"i": "elle"},
                    {"i": "elons"},
                    {"i": "elez"},
                    {"i": "ellent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "elais"},
                    {"i": "elais"},
                    {"i": "elait"},
                    {"i": "elions"},
                    {"i": "eliez"},
                    {"i": "elaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ellerai"},
                    {"i": "elleras"},
                    {"i": "ellera"},
                    {"i": "ellerons"},
                    {"i": "ellerez"},
                    {"i": "elleront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "elai"},
                    {"i": "elas"},
                    {"i": "ela"},
                    {"i": "elâmes"},
                    {"i": "elâtes"},
                    {"i": "elèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ellerais"},
                    {"i": "ellerais"},
                    {"i": "ellerait"},
                    {"i": "ellerions"},
                    {"i": "elleriez"},
                    {"i": "elleraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "elle"},
                    {"i": "elles"},
                    {"i": "elle"},
                    {"i": "elions"},
                    {"i": "eliez"},
                    {"i": "ellent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "elasse"},
                    {"i": "elasses"},
                    {"i": "elât"},
                    {"i": "elassions"},
                    {"i": "elassiez"},
                    {"i": "elassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "elle"},
                    {"i": "elons"},
                    {"i": "elez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "elant"}
            },
            "past-participle": {
                "p": [
                    {"i": "elé"},
                    {"i": "elés"},
                    {"i": "elée"},
                    {"i": "elées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "p:eler",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eler"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èle"},
                    {"i": "èles"},
                    {"i": "èle"},
                    {"i": "elons"},
                    {"i": "elez"},
                    {"i": "èlent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "elais"},
                    {"i": "elais"},
                    {"i": "elait"},
                    {"i": "elions"},
                    {"i": "eliez"},
                    {"i": "elaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èlerai"},
                    {"i": "èleras"},
                    {"i": "èlera"},
                    {"i": "èlerons"},
                    {"i": "èlerez"},
                    {"i": "èleront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "elai"},
                    {"i": "elas"},
                    {"i": "ela"},
                    {"i": "elâmes"},
                    {"i": "elâtes"},
                    {"i": "elèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èlerais"},
                    {"i": "èlerais"},
                    {"i": "èlerait"},
                    {"i": "èlerions"},
                    {"i": "èleriez"},
                    {"i": "èleraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èle"},
                    {"i": "èles"},
                    {"i": "èle"},
                    {"i": "elions"},
                    {"i": "eliez"},
                    {"i": "èlent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "elasse"},
                    {"i": "elasses"},
                    {"i": "elât"},
                    {"i": "elassions"},
                    {"i": "elassiez"},
                    {"i": "elassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èle"},
                    {"i": "elons"},
                    {"i": "elez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "elant"}
            },
            "past-participle": {
                "p": [
                    {"i": "elé"},
                    {"i": "elés"},
                    {"i": "elée"},
                    {"i": "elées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "harc:eler",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eler"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "elle",
                            "èle"
                        ]
                    },
                    {
                        "i": [
                            "elles",
                            "èles"
                        ]
                    },
                    {
                        "i": [
                            "elle",
                            "èle"
                        ]
                    },
                    {"i": "elons"},
                    {"i": "elez"},
                    {
                        "i": [
                            "ellent",
                            "èlent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "elais"},
                    {"i": "elais"},
                    {"i": "elait"},
                    {"i": "elions"},
                    {"i": "eliez"},
                    {"i": "elaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "ellerai",
                            "èlerai"
                        ]
                    },
                    {
                        "i": [
                            "elleras",
                            "èleras"
                        ]
                    },
                    {
                        "i": [
                            "ellera",
                            "èlera"
                        ]
                    },
                    {
                        "i": [
                            "ellerons",
                            "èlerons"
                        ]
                    },
                    {
                        "i": [
                            "ellerez",
                            "èlerez"
                        ]
                    },
                    {
                        "i": [
                            "elleront",
                            "èleront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "elai"},
                    {"i": "elas"},
                    {"i": "ela"},
                    {"i": "elâmes"},
                    {"i": "elâtes"},
                    {"i": "elèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ellerais",
                            "èlerais"
                        ]
                    },
                    {
                        "i": [
                            "ellerais",
                            "èlerais"
                        ]
                    },
                    {
                        "i": [
                            "ellerait",
                            "èlerait"
                        ]
                    },
                    {
                        "i": [
                            "ellerions",
                            "èlerions"
                        ]
                    },
                    {
                        "i": [
                            "elleriez",
                            "èleriez"
                        ]
                    },
                    {
                        "i": [
                            "elleraient",
                            "èleraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {
                        "i": [
                            "elle",
                            "èle"
                        ]
                    },
                    {
                        "i": [
                            "elles",
                            "èles"
                        ]
                    },
                    {
                        "i": [
                            "elle",
                            "èle"
                        ]
                    },
                    {"i": "elions"},
                    {"i": "eliez"},
                    {
                        "i": [
                            "ellent",
                            "èlent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "elasse"},
                    {"i": "elasses"},
                    {"i": "elât"},
                    {"i": "elassions"},
                    {"i": "elassiez"},
                    {"i": "elassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {
                        "i": [
                            "elle",
                            "èle"
                        ]
                    },
                    {"i": "elons"},
                    {"i": "elez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "elant"}
            },
            "past-participle": {
                "p": [
                    {"i": "elé"},
                    {"i": "elés"},
                    {"i": "elée"},
                    {"i": "elées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "j:eter",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eter"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ette"},
                    {"i": "ettes"},
                    {"i": "ette"},
                    {"i": "etons"},
                    {"i": "etez"},
                    {"i": "ettent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "etais"},
                    {"i": "etais"},
                    {"i": "etait"},
                    {"i": "etions"},
                    {"i": "etiez"},
                    {"i": "etaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "etterai"},
                    {"i": "etteras"},
                    {"i": "ettera"},
                    {"i": "etterons"},
                    {"i": "etterez"},
                    {"i": "etteront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "etai"},
                    {"i": "etas"},
                    {"i": "eta"},
                    {"i": "etâmes"},
                    {"i": "etâtes"},
                    {"i": "etèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "etterais"},
                    {"i": "etterais"},
                    {"i": "etterait"},
                    {"i": "etterions"},
                    {"i": "etteriez"},
                    {"i": "etteraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ette"},
                    {"i": "ettes"},
                    {"i": "ette"},
                    {"i": "etions"},
                    {"i": "etiez"},
                    {"i": "ettent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "etasse"},
                    {"i": "etasses"},
                    {"i": "etât"},
                    {"i": "etassions"},
                    {"i": "etassiez"},
                    {"i": "etassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ette"},
                    {"i": "etons"},
                    {"i": "etez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "etant"}
            },
            "past-participle": {
                "p": [
                    {"i": "eté"},
                    {"i": "etés"},
                    {"i": "etée"},
                    {"i": "etées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ach:eter",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eter"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ète"},
                    {"i": "ètes"},
                    {"i": "ète"},
                    {"i": "etons"},
                    {"i": "etez"},
                    {"i": "ètent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "etais"},
                    {"i": "etais"},
                    {"i": "etait"},
                    {"i": "etions"},
                    {"i": "etiez"},
                    {"i": "etaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èterai"},
                    {"i": "èteras"},
                    {"i": "ètera"},
                    {"i": "èterons"},
                    {"i": "èterez"},
                    {"i": "èteront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "etai"},
                    {"i": "etas"},
                    {"i": "eta"},
                    {"i": "etâmes"},
                    {"i": "etâtes"},
                    {"i": "etèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èterais"},
                    {"i": "èterais"},
                    {"i": "èterait"},
                    {"i": "èterions"},
                    {"i": "èteriez"},
                    {"i": "èteraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ète"},
                    {"i": "ètes"},
                    {"i": "ète"},
                    {"i": "etions"},
                    {"i": "etiez"},
                    {"i": "ètent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "etasse"},
                    {"i": "etasses"},
                    {"i": "etât"},
                    {"i": "etassions"},
                    {"i": "etassiez"},
                    {"i": "etassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ète"},
                    {"i": "etons"},
                    {"i": "etez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "etant"}
            },
            "past-participle": {
                "p": [
                    {"i": "eté"},
                    {"i": "etés"},
                    {"i": "etée"},
                    {"i": "etées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "héb:éter",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éter"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ète"},
                    {"i": "ètes"},
                    {"i": "ète"},
                    {"i": "étons"},
                    {"i": "étez"},
                    {"i": "ètent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étais"},
                    {"i": "étais"},
                    {"i": "était"},
                    {"i": "étions"},
                    {"i": "étiez"},
                    {"i": "étaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èterai"},
                    {"i": "èteras"},
                    {"i": "ètera"},
                    {"i": "èterons"},
                    {"i": "èterez"},
                    {"i": "èteront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "étai"},
                    {"i": "étas"},
                    {"i": "éta"},
                    {"i": "étâmes"},
                    {"i": "étâtes"},
                    {"i": "étèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èterais"},
                    {"i": "èterais"},
                    {"i": "èterait"},
                    {"i": "èterions"},
                    {"i": "èteriez"},
                    {"i": "èteraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ète"},
                    {"i": "ètes"},
                    {"i": "ète"},
                    {"i": "étions"},
                    {"i": "étiez"},
                    {"i": "ètent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étasse"},
                    {"i": "étasses"},
                    {"i": "étât"},
                    {"i": "étassions"},
                    {"i": "étassiez"},
                    {"i": "étassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ète"},
                    {"i": "étons"},
                    {"i": "étez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "étant"}
            },
            "past-participle": {
                "p": [
                    {"i": "été"},
                    {"i": "étés"},
                    {"i": "étée"},
                    {"i": "étées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "s:emer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "emer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ème"},
                    {"i": "èmes"},
                    {"i": "ème"},
                    {"i": "emons"},
                    {"i": "emez"},
                    {"i": "èment"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "emais"},
                    {"i": "emais"},
                    {"i": "emait"},
                    {"i": "emions"},
                    {"i": "emiez"},
                    {"i": "emaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èmerai"},
                    {"i": "èmeras"},
                    {"i": "èmera"},
                    {"i": "èmerons"},
                    {"i": "èmerez"},
                    {"i": "èmeront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "emai"},
                    {"i": "emas"},
                    {"i": "ema"},
                    {"i": "emâmes"},
                    {"i": "emâtes"},
                    {"i": "emèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èmerais"},
                    {"i": "èmerais"},
                    {"i": "èmerait"},
                    {"i": "èmerions"},
                    {"i": "èmeriez"},
                    {"i": "èmeraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ème"},
                    {"i": "èmes"},
                    {"i": "ème"},
                    {"i": "emions"},
                    {"i": "emiez"},
                    {"i": "èment"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "emasse"},
                    {"i": "emasses"},
                    {"i": "emât"},
                    {"i": "emassions"},
                    {"i": "emassiez"},
                    {"i": "emassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ème"},
                    {"i": "emons"},
                    {"i": "emez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "emant"}
            },
            "past-participle": {
                "p": [
                    {"i": "emé"},
                    {"i": "emés"},
                    {"i": "emée"},
                    {"i": "emées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "l:éguer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éguer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ègue"},
                    {"i": "ègues"},
                    {"i": "ègue"},
                    {"i": "éguons"},
                    {"i": "éguez"},
                    {"i": "èguent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "éguais"},
                    {"i": "éguais"},
                    {"i": "éguait"},
                    {"i": "éguions"},
                    {"i": "éguiez"},
                    {"i": "éguaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èguerai"},
                    {"i": "ègueras"},
                    {"i": "èguera"},
                    {"i": "èguerons"},
                    {"i": "èguerez"},
                    {"i": "ègueront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "éguai"},
                    {"i": "éguas"},
                    {"i": "égua"},
                    {"i": "éguâmes"},
                    {"i": "éguâtes"},
                    {"i": "éguèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èguerais"},
                    {"i": "èguerais"},
                    {"i": "èguerait"},
                    {"i": "èguerions"},
                    {"i": "ègueriez"},
                    {"i": "ègueraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ègue"},
                    {"i": "ègues"},
                    {"i": "ègue"},
                    {"i": "éguions"},
                    {"i": "éguiez"},
                    {"i": "èguent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "éguasse"},
                    {"i": "éguasses"},
                    {"i": "éguât"},
                    {"i": "éguassions"},
                    {"i": "éguassiez"},
                    {"i": "éguassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ègue"},
                    {"i": "éguons"},
                    {"i": "éguez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "éguant"}
            },
            "past-participle": {
                "p": [
                    {"i": "égué"},
                    {"i": "égués"},
                    {"i": "éguée"},
                    {"i": "éguées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "diss:équer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "équer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èque"},
                    {"i": "èques"},
                    {"i": "èque"},
                    {"i": "équons"},
                    {"i": "équez"},
                    {"i": "èquent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "équais"},
                    {"i": "équais"},
                    {"i": "équait"},
                    {"i": "équions"},
                    {"i": "équiez"},
                    {"i": "équaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èquerai"},
                    {"i": "èqueras"},
                    {"i": "èquera"},
                    {"i": "èquerons"},
                    {"i": "èquerez"},
                    {"i": "èqueront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "équai"},
                    {"i": "équas"},
                    {"i": "équa"},
                    {"i": "équâmes"},
                    {"i": "équâtes"},
                    {"i": "équèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èquerais"},
                    {"i": "èquerais"},
                    {"i": "èquerait"},
                    {"i": "èquerions"},
                    {"i": "èqueriez"},
                    {"i": "èqueraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èque"},
                    {"i": "èques"},
                    {"i": "èque"},
                    {"i": "équions"},
                    {"i": "équiez"},
                    {"i": "èquent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "équasse"},
                    {"i": "équasses"},
                    {"i": "équât"},
                    {"i": "équassions"},
                    {"i": "équassiez"},
                    {"i": "équassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èque"},
                    {"i": "équons"},
                    {"i": "équez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "équant"}
            },
            "past-participle": {
                "p": [
                    {"i": "équé"},
                    {"i": "équés"},
                    {"i": "équée"},
                    {"i": "équées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "rév:éler",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éler"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èle"},
                    {"i": "èles"},
                    {"i": "èle"},
                    {"i": "élons"},
                    {"i": "élez"},
                    {"i": "èlent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "élais"},
                    {"i": "élais"},
                    {"i": "élait"},
                    {"i": "élions"},
                    {"i": "éliez"},
                    {"i": "élaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "élerai",
                            "èlerai"
                        ]
                    },
                    {
                        "i": [
                            "éleras",
                            "èleras"
                        ]
                    },
                    {
                        "i": [
                            "élera",
                            "èlera"
                        ]
                    },
                    {
                        "i": [
                            "élerons",
                            "èlerons"
                        ]
                    },
                    {
                        "i": [
                            "élerez",
                            "èlerez"
                        ]
                    },
                    {
                        "i": [
                            "éleront",
                            "èleront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "élai"},
                    {"i": "élas"},
                    {"i": "éla"},
                    {"i": "élâmes"},
                    {"i": "élâtes"},
                    {"i": "élèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "élerais",
                            "èlerais"
                        ]
                    },
                    {
                        "i": [
                            "élerais",
                            "èlerais"
                        ]
                    },
                    {
                        "i": [
                            "élerait",
                            "èlerait"
                        ]
                    },
                    {
                        "i": [
                            "élerions",
                            "èlerions"
                        ]
                    },
                    {
                        "i": [
                            "éleriez",
                            "èleriez"
                        ]
                    },
                    {
                        "i": [
                            "éleraient",
                            "èleraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èle"},
                    {"i": "èles"},
                    {"i": "èle"},
                    {"i": "élions"},
                    {"i": "éliez"},
                    {"i": "èlent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "élasse"},
                    {"i": "élasses"},
                    {"i": "élât"},
                    {"i": "élassions"},
                    {"i": "élassiez"},
                    {"i": "élassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èle"},
                    {"i": "élons"},
                    {"i": "élez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "élant"}
            },
            "past-participle": {
                "p": [
                    {"i": "élé"},
                    {"i": "élés"},
                    {"i": "élée"},
                    {"i": "élées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "imp:étrer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "étrer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ètre"},
                    {"i": "ètres"},
                    {"i": "ètre"},
                    {"i": "étrons"},
                    {"i": "étrez"},
                    {"i": "ètrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étrais"},
                    {"i": "étrais"},
                    {"i": "étrait"},
                    {"i": "étrions"},
                    {"i": "étriez"},
                    {"i": "étraient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "étrerai",
                            "ètrerai"
                        ]
                    },
                    {
                        "i": [
                            "étreras",
                            "ètreras"
                        ]
                    },
                    {
                        "i": [
                            "étrera",
                            "ètrera"
                        ]
                    },
                    {
                        "i": [
                            "étrerons",
                            "ètrerons"
                        ]
                    },
                    {
                        "i": [
                            "étrerez",
                            "ètrerez"
                        ]
                    },
                    {
                        "i": [
                            "étreront",
                            "ètreront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "étrai"},
                    {"i": "étras"},
                    {"i": "étra"},
                    {"i": "étrâmes"},
                    {"i": "étrâtes"},
                    {"i": "étrèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "étrerais",
                            "ètrerais"
                        ]
                    },
                    {
                        "i": [
                            "étrerais",
                            "ètrerais"
                        ]
                    },
                    {
                        "i": [
                            "étrerait",
                            "ètrerait"
                        ]
                    },
                    {
                        "i": [
                            "étrerions",
                            "ètrerions"
                        ]
                    },
                    {
                        "i": [
                            "étreriez",
                            "ètreriez"
                        ]
                    },
                    {
                        "i": [
                            "étreraient",
                            "ètreraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ètre"},
                    {"i": "ètres"},
                    {"i": "ètre"},
                    {"i": "étrions"},
                    {"i": "étriez"},
                    {"i": "ètrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étrasse"},
                    {"i": "étrasses"},
                    {"i": "étrât"},
                    {"i": "étrassions"},
                    {"i": "étrassiez"},
                    {"i": "étrassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ètre"},
                    {"i": "étrons"},
                    {"i": "étrez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "étrant"}
            },
            "past-participle": {
                "p": [
                    {"i": "étré"},
                    {"i": "étrés"},
                    {"i": "étrée"},
                    {"i": "étrées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "r:égler",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "égler"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ègle"},
                    {"i": "ègles"},
                    {"i": "ègle"},
                    {"i": "églons"},
                    {"i": "églez"},
                    {"i": "èglent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "églais"},
                    {"i": "églais"},
                    {"i": "églait"},
                    {"i": "églions"},
                    {"i": "égliez"},
                    {"i": "églaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "églerai",
                            "èglerai"
                        ]
                    },
                    {
                        "i": [
                            "égleras",
                            "ègleras"
                        ]
                    },
                    {
                        "i": [
                            "églera",
                            "èglera"
                        ]
                    },
                    {
                        "i": [
                            "églerons",
                            "èglerons"
                        ]
                    },
                    {
                        "i": [
                            "églerez",
                            "èglerez"
                        ]
                    },
                    {
                        "i": [
                            "égleront",
                            "ègleront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "églai"},
                    {"i": "églas"},
                    {"i": "égla"},
                    {"i": "églâmes"},
                    {"i": "églâtes"},
                    {"i": "églèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "églerais",
                            "èglerais"
                        ]
                    },
                    {
                        "i": [
                            "églerais",
                            "èglerais"
                        ]
                    },
                    {
                        "i": [
                            "églerait",
                            "èglerait"
                        ]
                    },
                    {
                        "i": [
                            "églerions",
                            "èglerions"
                        ]
                    },
                    {
                        "i": [
                            "égleriez",
                            "ègleriez"
                        ]
                    },
                    {
                        "i": [
                            "égleraient",
                            "ègleraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ègle"},
                    {"i": "ègles"},
                    {"i": "ègle"},
                    {"i": "églions"},
                    {"i": "égliez"},
                    {"i": "èglent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "églasse"},
                    {"i": "églasses"},
                    {"i": "églât"},
                    {"i": "églassions"},
                    {"i": "églassiez"},
                    {"i": "églassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ègle"},
                    {"i": "églons"},
                    {"i": "églez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "églant"}
            },
            "past-participle": {
                "p": [
                    {"i": "églé"},
                    {"i": "églés"},
                    {"i": "églée"},
                    {"i": "églées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "r:égner",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "égner"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ègne"},
                    {"i": "ègnes"},
                    {"i": "ègne"},
                    {"i": "égnons"},
                    {"i": "égnez"},
                    {"i": "ègnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "égnais"},
                    {"i": "égnais"},
                    {"i": "égnait"},
                    {"i": "égnions"},
                    {"i": "égniez"},
                    {"i": "égnaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "égnerai",
                            "ègnerai"
                        ]
                    },
                    {
                        "i": [
                            "égneras",
                            "ègneras"
                        ]
                    },
                    {
                        "i": [
                            "égnera",
                            "ègnera"
                        ]
                    },
                    {
                        "i": [
                            "égnerons",
                            "ègnerons"
                        ]
                    },
                    {
                        "i": [
                            "égnerez",
                            "ègnerez"
                        ]
                    },
                    {
                        "i": [
                            "égneront",
                            "ègneront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "égnai"},
                    {"i": "égnas"},
                    {"i": "égna"},
                    {"i": "égnâmes"},
                    {"i": "égnâtes"},
                    {"i": "égnèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "égnerais",
                            "ègnerais"
                        ]
                    },
                    {
                        "i": [
                            "égnerais",
                            "ègnerais"
                        ]
                    },
                    {
                        "i": [
                            "égnerait",
                            "ègnerait"
                        ]
                    },
                    {
                        "i": [
                            "égnerions",
                            "ègnerions"
                        ]
                    },
                    {
                        "i": [
                            "égneriez",
                            "ègneriez"
                        ]
                    },
                    {
                        "i": [
                            "égneraient",
                            "ègneraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ègne"},
                    {"i": "ègnes"},
                    {"i": "ègne"},
                    {"i": "égnions"},
                    {"i": "égniez"},
                    {"i": "ègnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "égnasse"},
                    {"i": "égnasses"},
                    {"i": "égnât"},
                    {"i": "égnassions"},
                    {"i": "égnassiez"},
                    {"i": "égnassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ègne"},
                    {"i": "égnons"},
                    {"i": "égnez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "égnant"}
            },
            "past-participle": {
                "p": [
                    {"i": "égné"},
                    {"i": "égnés"},
                    {"i": "égnée"},
                    {"i": "égnées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "cél:ébrer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ébrer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èbre"},
                    {"i": "èbres"},
                    {"i": "èbre"},
                    {"i": "ébrons"},
                    {"i": "ébrez"},
                    {"i": "èbrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ébrais"},
                    {"i": "ébrais"},
                    {"i": "ébrait"},
                    {"i": "ébrions"},
                    {"i": "ébriez"},
                    {"i": "ébraient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "ébrerai",
                            "èbrerai"
                        ]
                    },
                    {
                        "i": [
                            "ébreras",
                            "èbreras"
                        ]
                    },
                    {
                        "i": [
                            "ébrera",
                            "èbrera"
                        ]
                    },
                    {
                        "i": [
                            "ébrerons",
                            "èbrerons"
                        ]
                    },
                    {
                        "i": [
                            "ébrerez",
                            "èbrerez"
                        ]
                    },
                    {
                        "i": [
                            "ébreront",
                            "èbreront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ébrai"},
                    {"i": "ébras"},
                    {"i": "ébra"},
                    {"i": "ébrâmes"},
                    {"i": "ébrâtes"},
                    {"i": "ébrèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ébrerais",
                            "èbrerais"
                        ]
                    },
                    {
                        "i": [
                            "ébrerais",
                            "èbrerais"
                        ]
                    },
                    {
                        "i": [
                            "ébrerait",
                            "èbrerait"
                        ]
                    },
                    {
                        "i": [
                            "ébrerions",
                            "èbrerions"
                        ]
                    },
                    {
                        "i": [
                            "ébreriez",
                            "èbreriez"
                        ]
                    },
                    {
                        "i": [
                            "ébreraient",
                            "èbreraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èbre"},
                    {"i": "èbres"},
                    {"i": "èbre"},
                    {"i": "ébrions"},
                    {"i": "ébriez"},
                    {"i": "èbrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ébrasse"},
                    {"i": "ébrasses"},
                    {"i": "ébrât"},
                    {"i": "ébrassions"},
                    {"i": "ébrassiez"},
                    {"i": "ébrassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èbre"},
                    {"i": "ébrons"},
                    {"i": "ébrez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ébrant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ébré"},
                    {"i": "ébrés"},
                    {"i": "ébrée"},
                    {"i": "ébrées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "int:égrer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "égrer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ègre"},
                    {"i": "ègres"},
                    {"i": "ègre"},
                    {"i": "égrons"},
                    {"i": "égrez"},
                    {"i": "ègrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "égrais"},
                    {"i": "égrais"},
                    {"i": "égrait"},
                    {"i": "égrions"},
                    {"i": "égriez"},
                    {"i": "égraient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "égrerai",
                            "ègrerai"
                        ]
                    },
                    {
                        "i": [
                            "égreras",
                            "ègreras"
                        ]
                    },
                    {
                        "i": [
                            "égrera",
                            "ègrera"
                        ]
                    },
                    {
                        "i": [
                            "égrerons",
                            "ègrerons"
                        ]
                    },
                    {
                        "i": [
                            "égrerez",
                            "ègrerez"
                        ]
                    },
                    {
                        "i": [
                            "égreront",
                            "ègreront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "égrai"},
                    {"i": "égras"},
                    {"i": "égra"},
                    {"i": "égrâmes"},
                    {"i": "égrâtes"},
                    {"i": "égrèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "égrerais",
                            "ègrerais"
                        ]
                    },
                    {
                        "i": [
                            "égrerais",
                            "ègrerais"
                        ]
                    },
                    {
                        "i": [
                            "égrerait",
                            "ègrerait"
                        ]
                    },
                    {
                        "i": [
                            "égrerions",
                            "ègrerions"
                        ]
                    },
                    {
                        "i": [
                            "égreriez",
                            "ègreriez"
                        ]
                    },
                    {
                        "i": [
                            "égreraient",
                            "ègreraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ègre"},
                    {"i": "ègres"},
                    {"i": "ègre"},
                    {"i": "égrions"},
                    {"i": "égriez"},
                    {"i": "ègrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "égrasse"},
                    {"i": "égrasses"},
                    {"i": "égrât"},
                    {"i": "égrassions"},
                    {"i": "égrassiez"},
                    {"i": "égrassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ègre"},
                    {"i": "égrons"},
                    {"i": "égrez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "égrant"}
            },
            "past-participle": {
                "p": [
                    {"i": "égré"},
                    {"i": "égrés"},
                    {"i": "égrée"},
                    {"i": "égrées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "décr:éter",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éter"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ète"},
                    {"i": "ètes"},
                    {"i": "ète"},
                    {"i": "étons"},
                    {"i": "étez"},
                    {"i": "ètent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étais"},
                    {"i": "étais"},
                    {"i": "était"},
                    {"i": "étions"},
                    {"i": "étiez"},
                    {"i": "étaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "éterai",
                            "èterai"
                        ]
                    },
                    {
                        "i": [
                            "éteras",
                            "èteras"
                        ]
                    },
                    {
                        "i": [
                            "étera",
                            "ètera"
                        ]
                    },
                    {
                        "i": [
                            "éterons",
                            "èterons"
                        ]
                    },
                    {
                        "i": [
                            "éterez",
                            "èterez"
                        ]
                    },
                    {
                        "i": [
                            "éteront",
                            "èteront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "étai"},
                    {"i": "étas"},
                    {"i": "éta"},
                    {"i": "étâmes"},
                    {"i": "étâtes"},
                    {"i": "étèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "éterais",
                            "èterais"
                        ]
                    },
                    {
                        "i": [
                            "éterais",
                            "èterais"
                        ]
                    },
                    {
                        "i": [
                            "éterait",
                            "èterait"
                        ]
                    },
                    {
                        "i": [
                            "éterions",
                            "èterions"
                        ]
                    },
                    {
                        "i": [
                            "éteriez",
                            "èteriez"
                        ]
                    },
                    {
                        "i": [
                            "éteraient",
                            "èteraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ète"},
                    {"i": "ètes"},
                    {"i": "ète"},
                    {"i": "étions"},
                    {"i": "étiez"},
                    {"i": "ètent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étasse"},
                    {"i": "étasses"},
                    {"i": "étât"},
                    {"i": "étassions"},
                    {"i": "étassiez"},
                    {"i": "étassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ète"},
                    {"i": "étons"},
                    {"i": "étez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "étant"}
            },
            "past-participle": {
                "p": [
                    {"i": "été"},
                    {"i": "étés"},
                    {"i": "étée"},
                    {"i": "étées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ali:éner",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éner"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ène"},
                    {"i": "ènes"},
                    {"i": "ène"},
                    {"i": "énons"},
                    {"i": "énez"},
                    {"i": "ènent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "énais"},
                    {"i": "énais"},
                    {"i": "énait"},
                    {"i": "énions"},
                    {"i": "éniez"},
                    {"i": "énaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "énerai",
                            "ènerai"
                        ]
                    },
                    {
                        "i": [
                            "éneras",
                            "èneras"
                        ]
                    },
                    {
                        "i": [
                            "énera",
                            "ènera"
                        ]
                    },
                    {
                        "i": [
                            "énerons",
                            "ènerons"
                        ]
                    },
                    {
                        "i": [
                            "énerez",
                            "ènerez"
                        ]
                    },
                    {
                        "i": [
                            "éneront",
                            "èneront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "énai"},
                    {"i": "énas"},
                    {"i": "éna"},
                    {"i": "énâmes"},
                    {"i": "énâtes"},
                    {"i": "énèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "énerais",
                            "ènerais"
                        ]
                    },
                    {
                        "i": [
                            "énerais",
                            "ènerais"
                        ]
                    },
                    {
                        "i": [
                            "énerait",
                            "ènerait"
                        ]
                    },
                    {
                        "i": [
                            "énerions",
                            "ènerions"
                        ]
                    },
                    {
                        "i": [
                            "éneriez",
                            "èneriez"
                        ]
                    },
                    {
                        "i": [
                            "éneraient",
                            "èneraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ène"},
                    {"i": "ènes"},
                    {"i": "ène"},
                    {"i": "énions"},
                    {"i": "éniez"},
                    {"i": "ènent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "énasse"},
                    {"i": "énasses"},
                    {"i": "énât"},
                    {"i": "énassions"},
                    {"i": "énassiez"},
                    {"i": "énassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ène"},
                    {"i": "énons"},
                    {"i": "énez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "énant"}
            },
            "past-participle": {
                "p": [
                    {"i": "éné"},
                    {"i": "énés"},
                    {"i": "énée"},
                    {"i": "énées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "m:ener",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ener"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ène"},
                    {"i": "ènes"},
                    {"i": "ène"},
                    {"i": "enons"},
                    {"i": "enez"},
                    {"i": "ènent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "enais"},
                    {"i": "enais"},
                    {"i": "enait"},
                    {"i": "enions"},
                    {"i": "eniez"},
                    {"i": "enaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ènerai"},
                    {"i": "èneras"},
                    {"i": "ènera"},
                    {"i": "ènerons"},
                    {"i": "ènerez"},
                    {"i": "èneront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "enai"},
                    {"i": "enas"},
                    {"i": "ena"},
                    {"i": "enâmes"},
                    {"i": "enâtes"},
                    {"i": "enèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ènerais"},
                    {"i": "ènerais"},
                    {"i": "ènerait"},
                    {"i": "ènerions"},
                    {"i": "èneriez"},
                    {"i": "èneraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ène"},
                    {"i": "ènes"},
                    {"i": "ène"},
                    {"i": "enions"},
                    {"i": "eniez"},
                    {"i": "ènent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "enasse"},
                    {"i": "enasses"},
                    {"i": "enât"},
                    {"i": "enassions"},
                    {"i": "enassiez"},
                    {"i": "enassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ène"},
                    {"i": "enons"},
                    {"i": "enez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "enant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ené"},
                    {"i": "enés"},
                    {"i": "enée"},
                    {"i": "enées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "l:ever",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ever"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ève"},
                    {"i": "èves"},
                    {"i": "ève"},
                    {"i": "evons"},
                    {"i": "evez"},
                    {"i": "èvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "evais"},
                    {"i": "evais"},
                    {"i": "evait"},
                    {"i": "evions"},
                    {"i": "eviez"},
                    {"i": "evaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èverai"},
                    {"i": "èveras"},
                    {"i": "èvera"},
                    {"i": "èverons"},
                    {"i": "èverez"},
                    {"i": "èveront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "evai"},
                    {"i": "evas"},
                    {"i": "eva"},
                    {"i": "evâmes"},
                    {"i": "evâtes"},
                    {"i": "evèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èverais"},
                    {"i": "èverais"},
                    {"i": "èverait"},
                    {"i": "èverions"},
                    {"i": "èveriez"},
                    {"i": "èveraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ève"},
                    {"i": "èves"},
                    {"i": "ève"},
                    {"i": "evions"},
                    {"i": "eviez"},
                    {"i": "èvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "evasse"},
                    {"i": "evasses"},
                    {"i": "evât"},
                    {"i": "evassions"},
                    {"i": "evassiez"},
                    {"i": "evassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ève"},
                    {"i": "evons"},
                    {"i": "evez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "evant"}
            },
            "past-participle": {
                "p": [
                    {"i": "evé"},
                    {"i": "evés"},
                    {"i": "evée"},
                    {"i": "evées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "p:eser",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eser"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èse"},
                    {"i": "èses"},
                    {"i": "èse"},
                    {"i": "esons"},
                    {"i": "esez"},
                    {"i": "èsent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "esais"},
                    {"i": "esais"},
                    {"i": "esait"},
                    {"i": "esions"},
                    {"i": "esiez"},
                    {"i": "esaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èserai"},
                    {"i": "èseras"},
                    {"i": "èsera"},
                    {"i": "èserons"},
                    {"i": "èserez"},
                    {"i": "èseront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "esai"},
                    {"i": "esas"},
                    {"i": "esa"},
                    {"i": "esâmes"},
                    {"i": "esâtes"},
                    {"i": "esèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èserais"},
                    {"i": "èserais"},
                    {"i": "èserait"},
                    {"i": "èserions"},
                    {"i": "èseriez"},
                    {"i": "èseraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èse"},
                    {"i": "èses"},
                    {"i": "èse"},
                    {"i": "esions"},
                    {"i": "esiez"},
                    {"i": "èsent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "esasse"},
                    {"i": "esasses"},
                    {"i": "esât"},
                    {"i": "esassions"},
                    {"i": "esassiez"},
                    {"i": "esassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èse"},
                    {"i": "esons"},
                    {"i": "esez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "esant"}
            },
            "past-participle": {
                "p": [
                    {"i": "esé"},
                    {"i": "esés"},
                    {"i": "esée"},
                    {"i": "esées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "s:écher",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "écher"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èche"},
                    {"i": "èches"},
                    {"i": "èche"},
                    {"i": "échons"},
                    {"i": "échez"},
                    {"i": "èchent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "échais"},
                    {"i": "échais"},
                    {"i": "échait"},
                    {"i": "échions"},
                    {"i": "échiez"},
                    {"i": "échaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "écherai"},
                    {"i": "écheras"},
                    {"i": "échera"},
                    {"i": "écherons"},
                    {"i": "écherez"},
                    {"i": "écheront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "échai"},
                    {"i": "échas"},
                    {"i": "écha"},
                    {"i": "échâmes"},
                    {"i": "échâtes"},
                    {"i": "échèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "écherais"},
                    {"i": "écherais"},
                    {"i": "écherait"},
                    {"i": "écherions"},
                    {"i": "écheriez"},
                    {"i": "écheraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èche"},
                    {"i": "èches"},
                    {"i": "èche"},
                    {"i": "échions"},
                    {"i": "échiez"},
                    {"i": "èchent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "échasse"},
                    {"i": "échasses"},
                    {"i": "échât"},
                    {"i": "échassions"},
                    {"i": "échassiez"},
                    {"i": "échassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èche"},
                    {"i": "échons"},
                    {"i": "échez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "échant"}
            },
            "past-participle": {
                "p": [
                    {"i": "éché"},
                    {"i": "échés"},
                    {"i": "échée"},
                    {"i": "échées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "réf:érer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "érer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ère"},
                    {"i": "ères"},
                    {"i": "ère"},
                    {"i": "érons"},
                    {"i": "érez"},
                    {"i": "èrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "érais"},
                    {"i": "érais"},
                    {"i": "érait"},
                    {"i": "érions"},
                    {"i": "ériez"},
                    {"i": "éraient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "érerai",
                            "èrerai"
                        ]
                    },
                    {
                        "i": [
                            "éreras",
                            "èreras"
                        ]
                    },
                    {
                        "i": [
                            "érera",
                            "èrera"
                        ]
                    },
                    {
                        "i": [
                            "érerons",
                            "èrerons"
                        ]
                    },
                    {
                        "i": [
                            "érerez",
                            "èrerez"
                        ]
                    },
                    {
                        "i": [
                            "éreront",
                            "èreront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "érai"},
                    {"i": "éras"},
                    {"i": "éra"},
                    {"i": "érâmes"},
                    {"i": "érâtes"},
                    {"i": "érèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "érerais",
                            "èrerais"
                        ]
                    },
                    {
                        "i": [
                            "érerais",
                            "èrerais"
                        ]
                    },
                    {
                        "i": [
                            "érerait",
                            "èrerait"
                        ]
                    },
                    {
                        "i": [
                            "érerions",
                            "èrerions"
                        ]
                    },
                    {
                        "i": [
                            "éreriez",
                            "èreriez"
                        ]
                    },
                    {
                        "i": [
                            "éreraient",
                            "èreraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ère"},
                    {"i": "ères"},
                    {"i": "ère"},
                    {"i": "érions"},
                    {"i": "ériez"},
                    {"i": "èrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "érasse"},
                    {"i": "érasses"},
                    {"i": "érât"},
                    {"i": "érassions"},
                    {"i": "érassiez"},
                    {"i": "érassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ère"},
                    {"i": "érons"},
                    {"i": "érez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "érant"}
            },
            "past-participle": {
                "p": [
                    {"i": "éré"},
                    {"i": "érés"},
                    {"i": "érée"},
                    {"i": "érées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "s:evrer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "evrer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èvre"},
                    {"i": "èvres"},
                    {"i": "èvre"},
                    {"i": "evrons"},
                    {"i": "evrez"},
                    {"i": "èvrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "evrais"},
                    {"i": "evrais"},
                    {"i": "evrait"},
                    {"i": "evrions"},
                    {"i": "evriez"},
                    {"i": "evraient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "èvrerai"},
                    {"i": "èvreras"},
                    {"i": "èvrera"},
                    {"i": "èvrerons"},
                    {"i": "èvrerez"},
                    {"i": "èvreront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "evrai"},
                    {"i": "evras"},
                    {"i": "evra"},
                    {"i": "evrâmes"},
                    {"i": "evrâtes"},
                    {"i": "evrèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "èvrerais"},
                    {"i": "èvrerais"},
                    {"i": "èvrerait"},
                    {"i": "èvrerions"},
                    {"i": "èvreriez"},
                    {"i": "èvreraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èvre"},
                    {"i": "èvres"},
                    {"i": "èvre"},
                    {"i": "evrions"},
                    {"i": "evriez"},
                    {"i": "èvrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "evrasse"},
                    {"i": "evrasses"},
                    {"i": "evrât"},
                    {"i": "evrassions"},
                    {"i": "evrassiez"},
                    {"i": "evrassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èvre"},
                    {"i": "evrons"},
                    {"i": "evrez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "evrant"}
            },
            "past-participle": {
                "p": [
                    {"i": "evré"},
                    {"i": "evrés"},
                    {"i": "evrée"},
                    {"i": "evrées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "c:éder",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éder"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ède"},
                    {"i": "èdes"},
                    {"i": "ède"},
                    {"i": "édons"},
                    {"i": "édez"},
                    {"i": "èdent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "édais"},
                    {"i": "édais"},
                    {"i": "édait"},
                    {"i": "édions"},
                    {"i": "édiez"},
                    {"i": "édaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "éderai",
                            "èderai"
                        ]
                    },
                    {
                        "i": [
                            "éderas",
                            "èderas"
                        ]
                    },
                    {
                        "i": [
                            "édera",
                            "èdera"
                        ]
                    },
                    {
                        "i": [
                            "éderons",
                            "èderons"
                        ]
                    },
                    {
                        "i": [
                            "éderez",
                            "èderez"
                        ]
                    },
                    {
                        "i": [
                            "éderont",
                            "èderont"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "édai"},
                    {"i": "édas"},
                    {"i": "éda"},
                    {"i": "édâmes"},
                    {"i": "édâtes"},
                    {"i": "édèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "éderais",
                            "èderais"
                        ]
                    },
                    {
                        "i": [
                            "éderais",
                            "èderais"
                        ]
                    },
                    {
                        "i": [
                            "éderait",
                            "èderait"
                        ]
                    },
                    {
                        "i": [
                            "éderions",
                            "èderions"
                        ]
                    },
                    {
                        "i": [
                            "éderiez",
                            "èderiez"
                        ]
                    },
                    {
                        "i": [
                            "éderaient",
                            "èderaient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ède"},
                    {"i": "èdes"},
                    {"i": "ède"},
                    {"i": "édions"},
                    {"i": "édiez"},
                    {"i": "èdent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "édasse"},
                    {"i": "édasses"},
                    {"i": "édât"},
                    {"i": "édassions"},
                    {"i": "édassiez"},
                    {"i": "édassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ède"},
                    {"i": "édons"},
                    {"i": "édez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "édant"}
            },
            "past-participle": {
                "p": [
                    {"i": "édé"},
                    {"i": "édés"},
                    {"i": "édée"},
                    {"i": "édées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "rec:éper",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éper"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èpe"},
                    {"i": "èpes"},
                    {"i": "èpe"},
                    {"i": "épons"},
                    {"i": "épez"},
                    {"i": "èpent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "épais"},
                    {"i": "épais"},
                    {"i": "épait"},
                    {"i": "épions"},
                    {"i": "épiez"},
                    {"i": "épaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "éperai",
                            "èperai"
                        ]
                    },
                    {
                        "i": [
                            "éperas",
                            "èperas"
                        ]
                    },
                    {
                        "i": [
                            "épera",
                            "èpera"
                        ]
                    },
                    {
                        "i": [
                            "éperons",
                            "èperons"
                        ]
                    },
                    {
                        "i": [
                            "éperez",
                            "èperez"
                        ]
                    },
                    {
                        "i": [
                            "éperont",
                            "èperont"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "épai"},
                    {"i": "épas"},
                    {"i": "épa"},
                    {"i": "épâmes"},
                    {"i": "épâtes"},
                    {"i": "épèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "éperais",
                            "èperais"
                        ]
                    },
                    {
                        "i": [
                            "éperais",
                            "èperais"
                        ]
                    },
                    {
                        "i": [
                            "éperait",
                            "èperait"
                        ]
                    },
                    {
                        "i": [
                            "éperions",
                            "èperions"
                        ]
                    },
                    {
                        "i": [
                            "éperiez",
                            "èperiez"
                        ]
                    },
                    {
                        "i": [
                            "éperaient",
                            "èperaient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èpe"},
                    {"i": "èpes"},
                    {"i": "èpe"},
                    {"i": "éprions"},
                    {"i": "épiez"},
                    {"i": "èpent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "épasse"},
                    {"i": "épasses"},
                    {"i": "épât"},
                    {"i": "épassions"},
                    {"i": "épassiez"},
                    {"i": "épassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èpe"},
                    {"i": "épons"},
                    {"i": "épez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "épant"}
            },
            "past-participle": {
                "p": [
                    {"i": "épé"},
                    {"i": "épés"},
                    {"i": "épée"},
                    {"i": "épées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "rec:eper",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eper"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èpe"},
                    {"i": "èpes"},
                    {"i": "èpe"},
                    {"i": "epons"},
                    {"i": "epez"},
                    {"i": "èpent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "epais"},
                    {"i": "epais"},
                    {"i": "epait"},
                    {"i": "epions"},
                    {"i": "epiez"},
                    {"i": "epaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "eperai",
                            "èperai"
                        ]
                    },
                    {
                        "i": [
                            "eperas",
                            "èperas"
                        ]
                    },
                    {
                        "i": [
                            "epera",
                            "èpera"
                        ]
                    },
                    {
                        "i": [
                            "eperons",
                            "èperons"
                        ]
                    },
                    {
                        "i": [
                            "eperez",
                            "èperez"
                        ]
                    },
                    {
                        "i": [
                            "eperont",
                            "èperont"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "epai"},
                    {"i": "epas"},
                    {"i": "epa"},
                    {"i": "epâmes"},
                    {"i": "epâtes"},
                    {"i": "epèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "eperais",
                            "èperais"
                        ]
                    },
                    {
                        "i": [
                            "eperais",
                            "èperais"
                        ]
                    },
                    {
                        "i": [
                            "eperait",
                            "èperait"
                        ]
                    },
                    {
                        "i": [
                            "eperions",
                            "èperions"
                        ]
                    },
                    {
                        "i": [
                            "eperiez",
                            "èperiez"
                        ]
                    },
                    {
                        "i": [
                            "eperaient",
                            "èperaient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èpe"},
                    {"i": "èpes"},
                    {"i": "èpe"},
                    {"i": "eprions"},
                    {"i": "epiez"},
                    {"i": "èpent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "epasse"},
                    {"i": "epasses"},
                    {"i": "epât"},
                    {"i": "epassions"},
                    {"i": "epassiez"},
                    {"i": "epassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èpe"},
                    {"i": "epons"},
                    {"i": "epez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "epant"}
            },
            "past-participle": {
                "p": [
                    {"i": "epé"},
                    {"i": "epés"},
                    {"i": "epée"},
                    {"i": "epées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "l:éser",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éser"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èse"},
                    {"i": "èses"},
                    {"i": "èse"},
                    {"i": "ésons"},
                    {"i": "ésez"},
                    {"i": "èsent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ésais"},
                    {"i": "ésais"},
                    {"i": "ésait"},
                    {"i": "ésions"},
                    {"i": "ésiez"},
                    {"i": "ésaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "éserai",
                            "èserai"
                        ]
                    },
                    {
                        "i": [
                            "éseras",
                            "èseras"
                        ]
                    },
                    {
                        "i": [
                            "ésera",
                            "èsera"
                        ]
                    },
                    {
                        "i": [
                            "éserons",
                            "èserons"
                        ]
                    },
                    {
                        "i": [
                            "éserez",
                            "èserez"
                        ]
                    },
                    {
                        "i": [
                            "éseront",
                            "èseront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ésai"},
                    {"i": "ésas"},
                    {"i": "ésa"},
                    {"i": "ésâmes"},
                    {"i": "ésâtes"},
                    {"i": "ésèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "éserais",
                            "èserais"
                        ]
                    },
                    {
                        "i": [
                            "éserais",
                            "èserais"
                        ]
                    },
                    {
                        "i": [
                            "éserait",
                            "èserait"
                        ]
                    },
                    {
                        "i": [
                            "éserions",
                            "èserions"
                        ]
                    },
                    {
                        "i": [
                            "éseriez",
                            "èseriez"
                        ]
                    },
                    {
                        "i": [
                            "éseraient",
                            "èseraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èse"},
                    {"i": "èses"},
                    {"i": "èse"},
                    {"i": "ésrions"},
                    {"i": "ésiez"},
                    {"i": "èsent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ésasse"},
                    {"i": "ésasses"},
                    {"i": "ésât"},
                    {"i": "ésassions"},
                    {"i": "ésassiez"},
                    {"i": "ésassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èse"},
                    {"i": "ésons"},
                    {"i": "ésez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ésant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ésé"},
                    {"i": "ésés"},
                    {"i": "ésée"},
                    {"i": "ésées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "cr:émer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "émer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ème"},
                    {"i": "èmes"},
                    {"i": "ème"},
                    {"i": "émons"},
                    {"i": "émez"},
                    {"i": "èment"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "émais"},
                    {"i": "émais"},
                    {"i": "émait"},
                    {"i": "émions"},
                    {"i": "émiez"},
                    {"i": "émaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "émerai",
                            "èmerai"
                        ]
                    },
                    {
                        "i": [
                            "émeras",
                            "èmeras"
                        ]
                    },
                    {
                        "i": [
                            "émera",
                            "èmera"
                        ]
                    },
                    {
                        "i": [
                            "émerons",
                            "èmerons"
                        ]
                    },
                    {
                        "i": [
                            "émerez",
                            "èmerez"
                        ]
                    },
                    {
                        "i": [
                            "émeront",
                            "èmeront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "émai"},
                    {"i": "émas"},
                    {"i": "éma"},
                    {"i": "émâmes"},
                    {"i": "émâtes"},
                    {"i": "émèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "émerais",
                            "èmerais"
                        ]
                    },
                    {
                        "i": [
                            "émerais",
                            "èmerais"
                        ]
                    },
                    {
                        "i": [
                            "émerait",
                            "èmerait"
                        ]
                    },
                    {
                        "i": [
                            "émerions",
                            "èmerions"
                        ]
                    },
                    {
                        "i": [
                            "émeriez",
                            "èmeriez"
                        ]
                    },
                    {
                        "i": [
                            "émeraient",
                            "èmeraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ème"},
                    {"i": "èmes"},
                    {"i": "ème"},
                    {"i": "émrions"},
                    {"i": "émiez"},
                    {"i": "èment"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "émasse"},
                    {"i": "émasses"},
                    {"i": "émât"},
                    {"i": "émassions"},
                    {"i": "émassiez"},
                    {"i": "émassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ème"},
                    {"i": "émons"},
                    {"i": "émez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "émant"}
            },
            "past-participle": {
                "p": [
                    {"i": "émé"},
                    {"i": "émés"},
                    {"i": "émée"},
                    {"i": "émées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "abr:éger",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "éger"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ège"},
                    {"i": "èges"},
                    {"i": "ège"},
                    {"i": "égeons"},
                    {"i": "égez"},
                    {"i": "ègent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "égeais"},
                    {"i": "égeais"},
                    {"i": "égeait"},
                    {"i": "égions"},
                    {"i": "égiez"},
                    {"i": "égeaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ègerai"},
                    {"i": "ègeras"},
                    {"i": "ègera"},
                    {"i": "ègerons"},
                    {"i": "ègerez"},
                    {"i": "ègeront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "égeai"},
                    {"i": "égeas"},
                    {"i": "égea"},
                    {"i": "égeâmes"},
                    {"i": "égeâtes"},
                    {"i": "égèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ègerais"},
                    {"i": "ègerais"},
                    {"i": "ègerait"},
                    {"i": "ègerions"},
                    {"i": "ègeriez"},
                    {"i": "ègeraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ège"},
                    {"i": "èges"},
                    {"i": "ège"},
                    {"i": "égions"},
                    {"i": "égiez"},
                    {"i": "ègent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "égeasse"},
                    {"i": "égeasses"},
                    {"i": "égeât"},
                    {"i": "égeassions"},
                    {"i": "égeassiez"},
                    {"i": "égeassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ège"},
                    {"i": "égeons"},
                    {"i": "égez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "égeant"}
            },
            "past-participle": {
                "p": [
                    {"i": "égé"},
                    {"i": "égés"},
                    {"i": "égée"},
                    {"i": "égées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "aim:er",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "er"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "erai"},
                    {"i": "eras"},
                    {"i": "era"},
                    {"i": "erons"},
                    {"i": "erez"},
                    {"i": "eront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ai"},
                    {"i": "as"},
                    {"i": "a"},
                    {"i": "âmes"},
                    {"i": "âtes"},
                    {"i": "èrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "erais"},
                    {"i": "erais"},
                    {"i": "erait"},
                    {"i": "erions"},
                    {"i": "eriez"},
                    {"i": "eraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "asse"},
                    {"i": "asses"},
                    {"i": "ât"},
                    {"i": "assions"},
                    {"i": "assiez"},
                    {"i": "assent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "é"},
                    {"i": "és"},
                    {"i": "ée"},
                    {"i": "ées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "enfi:évrer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "évrer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "èvre"},
                    {"i": "èvres"},
                    {"i": "èvre"},
                    {"i": "évrons"},
                    {"i": "évrez"},
                    {"i": "èvrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "évrais"},
                    {"i": "évrais"},
                    {"i": "évrait"},
                    {"i": "évrions"},
                    {"i": "évriez"},
                    {"i": "évraient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "évrerai"},
                    {"i": "évreras"},
                    {"i": "évrera"},
                    {"i": "évrerons"},
                    {"i": "évrerez"},
                    {"i": "évreront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "évrai"},
                    {"i": "évras"},
                    {"i": "évra"},
                    {"i": "évrâmes"},
                    {"i": "évrâtes"},
                    {"i": "évrèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "évrerais"},
                    {"i": "évrerais"},
                    {"i": "évrerait"},
                    {"i": "évrerions"},
                    {"i": "évreriez"},
                    {"i": "évreraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "èvre"},
                    {"i": "èvres"},
                    {"i": "èvre"},
                    {"i": "évrions"},
                    {"i": "évriez"},
                    {"i": "èvrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "évrasse"},
                    {"i": "évrasses"},
                    {"i": "évrât"},
                    {"i": "évrassions"},
                    {"i": "évrassiez"},
                    {"i": "évrassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "èvre"},
                    {"i": "évrons"},
                    {"i": "évrez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "évrant"}
            },
            "past-participle": {
                "p": [
                    {"i": "évré"},
                    {"i": "évrés"},
                    {"i": "évrée"},
                    {"i": "évrées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ex:écrer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "écrer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ècre"},
                    {"i": "ècres"},
                    {"i": "ècre"},
                    {"i": "écrons"},
                    {"i": "écrez"},
                    {"i": "ècrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "écrais"},
                    {"i": "écrais"},
                    {"i": "écrait"},
                    {"i": "écrions"},
                    {"i": "écriez"},
                    {"i": "écraient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "écrerai"},
                    {"i": "écreras"},
                    {"i": "écrera"},
                    {"i": "écrerons"},
                    {"i": "écrerez"},
                    {"i": "écreront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "écrai"},
                    {"i": "écras"},
                    {"i": "écra"},
                    {"i": "écrâmes"},
                    {"i": "écrâtes"},
                    {"i": "écrèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "écrerais"},
                    {"i": "écrerais"},
                    {"i": "écrerait"},
                    {"i": "écrerions"},
                    {"i": "écreriez"},
                    {"i": "écreraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ècre"},
                    {"i": "ècres"},
                    {"i": "ècre"},
                    {"i": "écrions"},
                    {"i": "écriez"},
                    {"i": "ècrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "écrasse"},
                    {"i": "écrasses"},
                    {"i": "écrât"},
                    {"i": "écrassions"},
                    {"i": "écrassiez"},
                    {"i": "écrassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ècre"},
                    {"i": "écrons"},
                    {"i": "écrez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "écrant"}
            },
            "past-participle": {
                "p": [
                    {"i": "écré"},
                    {"i": "écrés"},
                    {"i": "écrée"},
                    {"i": "écrées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "acqu:érir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "érir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "iers"},
                    {"i": "iers"},
                    {"i": "iert"},
                    {"i": "érons"},
                    {"i": "érez"},
                    {"i": "ièrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "érais"},
                    {"i": "érais"},
                    {"i": "érait"},
                    {"i": "érions"},
                    {"i": "ériez"},
                    {"i": "éraient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "errai"},
                    {"i": "erras"},
                    {"i": "erra"},
                    {"i": "errons"},
                    {"i": "errez"},
                    {"i": "erront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "errais"},
                    {"i": "errais"},
                    {"i": "errait"},
                    {"i": "errions"},
                    {"i": "erriez"},
                    {"i": "erraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ière"},
                    {"i": "ières"},
                    {"i": "ière"},
                    {"i": "érions"},
                    {"i": "ériez"},
                    {"i": "ièrent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "iers"},
                    {"i": "érons"},
                    {"i": "érez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "érant"}
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "qu:érir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "érir"}
            }
        },
        "indicative": {
            "present": {},
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "ha:ïr",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ïr"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "ïssons"},
                    {"i": "ïssez"},
                    {"i": "ïssent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ïssais"},
                    {"i": "ïssais"},
                    {"i": "ïssait"},
                    {"i": "ïssions"},
                    {"i": "ïssiez"},
                    {"i": "ïssaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ïrai"},
                    {"i": "ïras"},
                    {"i": "ïra"},
                    {"i": "ïrons"},
                    {"i": "ïrez"},
                    {"i": "ïront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ïs"},
                    {"i": "ïs"},
                    {"i": "ït"},
                    {"i": "ïmes"},
                    {"i": "ïtes"},
                    {"i": "ïrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ïrais"},
                    {"i": "ïrais"},
                    {"i": "ïrait"},
                    {"i": "ïrions"},
                    {"i": "ïriez"},
                    {"i": "ïraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ïsse"},
                    {"i": "ïsses"},
                    {"i": "ïsse"},
                    {"i": "ïssions"},
                    {"i": "ïssiez"},
                    {"i": "ïssent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ïsse"},
                    {"i": "ïsses"},
                    {"i": "ït"},
                    {"i": "ïssions"},
                    {"i": "ïssiez"},
                    {"i": "ïssent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "ïssons"},
                    {"i": "ïssez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ïssant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ï"},
                    {"i": "ïs"},
                    {"i": "ïe"},
                    {"i": "ïes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "amu:ïr",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ïr"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ïs"},
                    {"i": "ïs"},
                    {"i": "ït"},
                    {"i": "ïssons"},
                    {"i": "ïssez"},
                    {"i": "ïssent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ïssais"},
                    {"i": "ïssais"},
                    {"i": "ïssait"},
                    {"i": "ïssions"},
                    {"i": "ïssiez"},
                    {"i": "ïssaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ïrai"},
                    {"i": "ïras"},
                    {"i": "ïra"},
                    {"i": "ïrons"},
                    {"i": "ïrez"},
                    {"i": "ïront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ïs"},
                    {"i": "ïs"},
                    {"i": "ït"},
                    {"i": "ïmes"},
                    {"i": "ïtes"},
                    {"i": "ïrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ïrais"},
                    {"i": "ïrais"},
                    {"i": "ïrait"},
                    {"i": "ïrions"},
                    {"i": "ïriez"},
                    {"i": "ïraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ïsse"},
                    {"i": "ïsses"},
                    {"i": "ïsse"},
                    {"i": "ïssions"},
                    {"i": "ïssiez"},
                    {"i": "ïssent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ïsse"},
                    {"i": "ïsses"},
                    {"i": "ït"},
                    {"i": "ïssions"},
                    {"i": "ïssiez"},
                    {"i": "ïssent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ïs"},
                    {"i": "ïssons"},
                    {"i": "ïssez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ïssant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ï"},
                    {"i": "ïs"},
                    {"i": "ïe"},
                    {"i": "ïes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fl:eurir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eurir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "euris"},
                    {"i": "euris"},
                    {"i": "eurit"},
                    {"i": "eurissons"},
                    {"i": "eurissez"},
                    {"i": "eurissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {
                        "i": [
                            "eurissais",
                            "orissais"
                        ]
                    },
                    {
                        "i": [
                            "eurissais",
                            "orissais"
                        ]
                    },
                    {
                        "i": [
                            "eurissait",
                            "orissait"
                        ]
                    },
                    {
                        "i": [
                            "eurissions",
                            "orissions"
                        ]
                    },
                    {
                        "i": [
                            "eurissiez",
                            "orissiez"
                        ]
                    },
                    {
                        "i": [
                            "eurissaient",
                            "orissaient"
                        ]
                    }
                ]
            },
            "future": {
                "p": [
                    {"i": "eurirai"},
                    {"i": "euriras"},
                    {"i": "eurira"},
                    {"i": "eurirons"},
                    {"i": "eurirez"},
                    {"i": "euriront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "euris"},
                    {"i": "euris"},
                    {"i": "eurit"},
                    {"i": "eurîmes"},
                    {"i": "eurîtes"},
                    {"i": "eurirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "eurirais"},
                    {"i": "eurirais"},
                    {"i": "eurirait"},
                    {"i": "euririons"},
                    {"i": "euririez"},
                    {"i": "euriraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "eurisse"},
                    {"i": "eurisses"},
                    {"i": "eurisse"},
                    {"i": "eurissions"},
                    {"i": "eurissiez"},
                    {"i": "eurissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "eurisse"},
                    {"i": "eurisses"},
                    {"i": "eurît"},
                    {"i": "eurissions"},
                    {"i": "eurissiez"},
                    {"i": "eurissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "euris"},
                    {"i": "eurissons"},
                    {"i": "eurissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {
                    "i": [
                        "eurissant",
                        "orissant"
                    ]
                }
            },
            "past-participle": {
                "p": [
                    {"i": "euri"},
                    {"i": "euris"},
                    {"i": "eurie"},
                    {"i": "euries"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ouv:rir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "rir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "re"},
                    {"i": "res"},
                    {"i": "re"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "rent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "rirai"},
                    {"i": "riras"},
                    {"i": "rira"},
                    {"i": "rirons"},
                    {"i": "rirez"},
                    {"i": "riront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ris"},
                    {"i": "ris"},
                    {"i": "rit"},
                    {"i": "rîmes"},
                    {"i": "rîtes"},
                    {"i": "rirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rirais"},
                    {"i": "rirais"},
                    {"i": "rirait"},
                    {"i": "ririons"},
                    {"i": "ririez"},
                    {"i": "riraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "re"},
                    {"i": "res"},
                    {"i": "re"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "rent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "risse"},
                    {"i": "risses"},
                    {"i": "rît"},
                    {"i": "rissions"},
                    {"i": "rissiez"},
                    {"i": "rissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "re"},
                    {"i": "rons"},
                    {"i": "rez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "rant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ert"},
                    {"i": "erts"},
                    {"i": "erte"},
                    {"i": "ertes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "dor:mir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "mir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "mons"},
                    {"i": "mez"},
                    {"i": "ment"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "mais"},
                    {"i": "mais"},
                    {"i": "mait"},
                    {"i": "mions"},
                    {"i": "miez"},
                    {"i": "maient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "mirai"},
                    {"i": "miras"},
                    {"i": "mira"},
                    {"i": "mirons"},
                    {"i": "mirez"},
                    {"i": "miront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "mis"},
                    {"i": "mis"},
                    {"i": "mit"},
                    {"i": "mîmes"},
                    {"i": "mîtes"},
                    {"i": "mirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "mirais"},
                    {"i": "mirais"},
                    {"i": "mirait"},
                    {"i": "mirions"},
                    {"i": "miriez"},
                    {"i": "miraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "me"},
                    {"i": "mes"},
                    {"i": "me"},
                    {"i": "mions"},
                    {"i": "miez"},
                    {"i": "ment"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "misse"},
                    {"i": "misses"},
                    {"i": "mît"},
                    {"i": "missions"},
                    {"i": "missiez"},
                    {"i": "missent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "mons"},
                    {"i": "mez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "mant"}
            },
            "past-participle": {
                "p": [
                    {"i": "mi"},
                    {"i": "mis"},
                    {"i": "mie"},
                    {"i": "mies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "men:tir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "tir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "tons"},
                    {"i": "tez"},
                    {"i": "tent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "tais"},
                    {"i": "tais"},
                    {"i": "tait"},
                    {"i": "tions"},
                    {"i": "tiez"},
                    {"i": "taient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "tirai"},
                    {"i": "tiras"},
                    {"i": "tira"},
                    {"i": "tirons"},
                    {"i": "tirez"},
                    {"i": "tiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "tis"},
                    {"i": "tis"},
                    {"i": "tit"},
                    {"i": "tîmes"},
                    {"i": "tîtes"},
                    {"i": "tirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "tirais"},
                    {"i": "tirais"},
                    {"i": "tirait"},
                    {"i": "tirions"},
                    {"i": "tiriez"},
                    {"i": "tiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "te"},
                    {"i": "tes"},
                    {"i": "te"},
                    {"i": "tions"},
                    {"i": "tiez"},
                    {"i": "tent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "tisse"},
                    {"i": "tisses"},
                    {"i": "tît"},
                    {"i": "tissions"},
                    {"i": "tissiez"},
                    {"i": "tissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "tons"},
                    {"i": "tez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "tant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ti"},
                    {"i": "tis"},
                    {"i": "tie"},
                    {"i": "ties"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ser:vir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "vir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "vons"},
                    {"i": "vez"},
                    {"i": "vent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "vais"},
                    {"i": "vais"},
                    {"i": "vait"},
                    {"i": "vions"},
                    {"i": "viez"},
                    {"i": "vaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "virai"},
                    {"i": "viras"},
                    {"i": "vira"},
                    {"i": "virons"},
                    {"i": "virez"},
                    {"i": "viront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "vis"},
                    {"i": "vis"},
                    {"i": "vit"},
                    {"i": "vîmes"},
                    {"i": "vîtes"},
                    {"i": "virent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "virais"},
                    {"i": "virais"},
                    {"i": "virait"},
                    {"i": "virions"},
                    {"i": "viriez"},
                    {"i": "viraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ve"},
                    {"i": "ves"},
                    {"i": "ve"},
                    {"i": "vions"},
                    {"i": "viez"},
                    {"i": "vent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "visse"},
                    {"i": "visses"},
                    {"i": "vît"},
                    {"i": "vissions"},
                    {"i": "vissiez"},
                    {"i": "vissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "vons"},
                    {"i": "vez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "vant"}
            },
            "past-participle": {
                "p": [
                    {"i": "vi"},
                    {"i": "vis"},
                    {"i": "vie"},
                    {"i": "vies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "bou:illir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "illir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "illons"},
                    {"i": "illez"},
                    {"i": "illent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "illais"},
                    {"i": "illais"},
                    {"i": "illait"},
                    {"i": "illions"},
                    {"i": "illiez"},
                    {"i": "illaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "illirai"},
                    {"i": "illiras"},
                    {"i": "illira"},
                    {"i": "illirons"},
                    {"i": "illirez"},
                    {"i": "illiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "illis"},
                    {"i": "illis"},
                    {"i": "illit"},
                    {"i": "illîmes"},
                    {"i": "illîtes"},
                    {"i": "illirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "illirais"},
                    {"i": "illirais"},
                    {"i": "illirait"},
                    {"i": "illirions"},
                    {"i": "illiriez"},
                    {"i": "illiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ille"},
                    {"i": "illes"},
                    {"i": "ille"},
                    {"i": "illions"},
                    {"i": "illiez"},
                    {"i": "illent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "illisse"},
                    {"i": "illisses"},
                    {"i": "illît"},
                    {"i": "illissions"},
                    {"i": "illissiez"},
                    {"i": "illissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "illons"},
                    {"i": "illez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "illant"}
            },
            "past-participle": {
                "p": [
                    {"i": "illi"},
                    {"i": "illis"},
                    {"i": "illie"},
                    {"i": "illies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "assaill:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "saill:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {
                        "i": [
                            "it",
                            "e"
                        ]
                    },
                    {"i": "issons"},
                    {"i": "issez"},
                    {
                        "i": [
                            "issent",
                            "ent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "issais"},
                    {"i": "issais"},
                    {
                        "i": [
                            "issait",
                            "ait"
                        ]
                    },
                    {"i": "issions"},
                    {"i": "issiez"},
                    {
                        "i": [
                            "issaient",
                            "aient"
                        ]
                    }
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {
                        "i": [
                            "ira",
                            "era"
                        ]
                    },
                    {"i": "irons"},
                    {"i": "irez"},
                    {
                        "i": [
                            "iront",
                            "eront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {
                        "i": [
                            "irait",
                            "erait"
                        ]
                    },
                    {"i": "irions"},
                    {"i": "iriez"},
                    {
                        "i": [
                            "iraient",
                            "eraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {
                        "i": [
                            "isse",
                            "e"
                        ]
                    },
                    {"i": "issions"},
                    {"i": "issiez"},
                    {
                        "i": [
                            "issent",
                            "ent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "issons"},
                    {"i": "issez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {
                    "i": [
                        "issant",
                        "ant"
                    ]
                }
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "cueill:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "erai"},
                    {"i": "eras"},
                    {"i": "era"},
                    {"i": "erons"},
                    {"i": "erez"},
                    {"i": "eront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "erais"},
                    {"i": "erais"},
                    {"i": "erait"},
                    {"i": "erions"},
                    {"i": "eriez"},
                    {"i": "eraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "e"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "t:enir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "enir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "iens"},
                    {"i": "iens"},
                    {"i": "ient"},
                    {"i": "enons"},
                    {"i": "enez"},
                    {"i": "iennent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "enais"},
                    {"i": "enais"},
                    {"i": "enait"},
                    {"i": "enions"},
                    {"i": "eniez"},
                    {"i": "enaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "iendrai"},
                    {"i": "iendras"},
                    {"i": "iendra"},
                    {"i": "iendrons"},
                    {"i": "iendrez"},
                    {"i": "iendront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ins"},
                    {"i": "ins"},
                    {"i": "int"},
                    {"i": "înmes"},
                    {"i": "întes"},
                    {"i": "inrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "iendrais"},
                    {"i": "iendrais"},
                    {"i": "iendrait"},
                    {"i": "iendrions"},
                    {"i": "iendriez"},
                    {"i": "iendraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ienne"},
                    {"i": "iennes"},
                    {"i": "ienne"},
                    {"i": "enions"},
                    {"i": "eniez"},
                    {"i": "iennent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "insse"},
                    {"i": "insses"},
                    {"i": "înt"},
                    {"i": "inssions"},
                    {"i": "inssiez"},
                    {"i": "inssent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "iens"},
                    {"i": "enons"},
                    {"i": "enez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "enant"}
            },
            "past-participle": {
                "p": [
                    {"i": "enu"},
                    {"i": "enus"},
                    {"i": "enue"},
                    {"i": "enues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "adv:enir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "enir"}
            }
        },
        "indicative": {
            "present": {
                "p": {"i": "ient"}
            },
            "imperfect": {
                "p": {"i": "enait"}
            },
            "future": {
                "p": {"i": "iendra"}
            },
            "simple-past": {
                "p": {"i": "int"}
            }
        },
        "conditional": {
            "present": {
                "p": {"i": "iendrait"}
            }
        },
        "subjunctive": {
            "present": {
                "p": {"i": "ienne"}
            },
            "imperfect": {
                "p": {"i": "înt"}
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "enant"}
            },
            "past-participle": {
                "p": [
                    {"i": "enu"},
                    {"i": "enus"},
                    {"i": "enue"},
                    {"i": "enues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fu:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "yons"},
                    {"i": "yez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": {"i": "i"}
            }
        }
    }),
    new conjugation({
        "-name": "m:ourir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ourir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "eurs"},
                    {"i": "eurs"},
                    {"i": "eurt"},
                    {"i": "ourons"},
                    {"i": "ourez"},
                    {"i": "eurent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ourais"},
                    {"i": "ourais"},
                    {"i": "ourait"},
                    {"i": "ourions"},
                    {"i": "ouriez"},
                    {"i": "ouraient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ourrai"},
                    {"i": "ourras"},
                    {"i": "ourra"},
                    {"i": "ourrons"},
                    {"i": "ourrez"},
                    {"i": "ourront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ourus"},
                    {"i": "ourus"},
                    {"i": "ourut"},
                    {"i": "ourûmes"},
                    {"i": "ourûtes"},
                    {"i": "oururent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ourrais"},
                    {"i": "ourrais"},
                    {"i": "ourrait"},
                    {"i": "ourrions"},
                    {"i": "ourriez"},
                    {"i": "ourraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "eure"},
                    {"i": "eures"},
                    {"i": "eure"},
                    {"i": "ourions"},
                    {"i": "ouriez"},
                    {"i": "eurent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ourusse"},
                    {"i": "ourusses"},
                    {"i": "ourût"},
                    {"i": "ourussions"},
                    {"i": "ourussiez"},
                    {"i": "ourussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "eurs"},
                    {"i": "ourons"},
                    {"i": "ourez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ourant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ort"},
                    {"i": "orts"},
                    {"i": "orte"},
                    {"i": "ortes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "vêt:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "cour:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "rai"},
                    {"i": "ras"},
                    {"i": "ra"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "ront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fin:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "issons"},
                    {"i": "issez"},
                    {"i": "issent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "issais"},
                    {"i": "issais"},
                    {"i": "issait"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "isse"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "issons"},
                    {"i": "issez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "issant"}
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "chauv:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "ons"},
                    {"i": "ez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "aient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "e"},
                    {"i": "es"},
                    {"i": "e"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "ons"},
                    {"i": "ez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "maud:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "issons"},
                    {"i": "issez"},
                    {"i": "issent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "issais"},
                    {"i": "issais"},
                    {"i": "issait"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "isse"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "issons"},
                    {"i": "issez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "issant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fa:illir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "illir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ux"},
                    {"i": "ux"},
                    {"i": "ut"},
                    {"i": "illons"},
                    {"i": "illez"},
                    {"i": "illent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "illais"},
                    {"i": "illais"},
                    {"i": "illait"},
                    {"i": "illions"},
                    {"i": "illiez"},
                    {"i": "illaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "illirai"},
                    {"i": "illiras"},
                    {"i": "illira"},
                    {"i": "illirons"},
                    {"i": "illirez"},
                    {"i": "illiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "illis"},
                    {"i": "illis"},
                    {"i": "illit"},
                    {"i": "illîmes"},
                    {"i": "illîtes"},
                    {"i": "illirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "illirais"},
                    {"i": "illirais"},
                    {"i": "illirait"},
                    {"i": "illirions"},
                    {"i": "illiriez"},
                    {"i": "illiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "illisse"},
                    {"i": "illisses"},
                    {"i": "illisse"},
                    {"i": "illissions"},
                    {"i": "illissiez"},
                    {"i": "illissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "illisse"},
                    {"i": "illisses"},
                    {"i": "illît"},
                    {"i": "illissions"},
                    {"i": "illissiez"},
                    {"i": "illissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "illant"}
            },
            "past-participle": {
                "p": [
                    {"i": "illi"},
                    {"i": "illis"},
                    {"i": "illie"},
                    {"i": "illies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "g:ésir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ésir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ît"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "dé:cevoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "cevoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "çois"},
                    {"i": "çois"},
                    {"i": "çoit"},
                    {"i": "cevons"},
                    {"i": "cevez"},
                    {"i": "çoivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "cevais"},
                    {"i": "cevais"},
                    {"i": "cevait"},
                    {"i": "cevions"},
                    {"i": "ceviez"},
                    {"i": "cevaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "cevrai"},
                    {"i": "cevras"},
                    {"i": "cevra"},
                    {"i": "cevrons"},
                    {"i": "cevrez"},
                    {"i": "cevront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "çus"},
                    {"i": "çus"},
                    {"i": "çut"},
                    {"i": "çûmes"},
                    {"i": "çûtes"},
                    {"i": "çurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "cevrais"},
                    {"i": "cevrais"},
                    {"i": "cevrait"},
                    {"i": "cevrions"},
                    {"i": "cevriez"},
                    {"i": "cevraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "çoive"},
                    {"i": "çoives"},
                    {"i": "çoive"},
                    {"i": "cevions"},
                    {"i": "ceviez"},
                    {"i": "çoivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "çusse"},
                    {"i": "çusses"},
                    {"i": "çût"},
                    {"i": "çussions"},
                    {"i": "çussiez"},
                    {"i": "çussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "çois"},
                    {"i": "cevons"},
                    {"i": "cevez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "cevant"}
            },
            "past-participle": {
                "p": [
                    {"i": "çu"},
                    {"i": "çus"},
                    {"i": "çue"},
                    {"i": "çues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "d:evoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "evoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "evons"},
                    {"i": "evez"},
                    {"i": "oivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "evais"},
                    {"i": "evais"},
                    {"i": "evait"},
                    {"i": "evions"},
                    {"i": "eviez"},
                    {"i": "evaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "evrai"},
                    {"i": "evras"},
                    {"i": "evra"},
                    {"i": "evrons"},
                    {"i": "evrez"},
                    {"i": "evront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "evrais"},
                    {"i": "evrais"},
                    {"i": "evrait"},
                    {"i": "evrions"},
                    {"i": "evriez"},
                    {"i": "evraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oive"},
                    {"i": "oives"},
                    {"i": "oive"},
                    {"i": "evions"},
                    {"i": "eviez"},
                    {"i": "oivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "evons"},
                    {"i": "evez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "evant"}
            },
            "past-participle": {
                "p": [
                    {"i": "û"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "m:ouvoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ouvoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "eus"},
                    {"i": "eus"},
                    {"i": "eut"},
                    {"i": "ouvons"},
                    {"i": "ouvez"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ouvais"},
                    {"i": "ouvais"},
                    {"i": "ouvait"},
                    {"i": "ouvions"},
                    {"i": "ouviez"},
                    {"i": "ouvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ouvrai"},
                    {"i": "ouvras"},
                    {"i": "ouvra"},
                    {"i": "ouvrons"},
                    {"i": "ouvrez"},
                    {"i": "ouvront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ouvrais"},
                    {"i": "ouvrais"},
                    {"i": "ouvrait"},
                    {"i": "ouvrions"},
                    {"i": "ouvriez"},
                    {"i": "ouvraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "euve"},
                    {"i": "euves"},
                    {"i": "euve"},
                    {"i": "ouvions"},
                    {"i": "ouviez"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "eus"},
                    {"i": "ouvons"},
                    {"i": "ouvez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ouvant"}
            },
            "past-participle": {
                "p": [
                    {
                        "i": [
                            "u",
                            "û"
                        ]
                    },
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "prom:ouvoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ouvoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "eus"},
                    {"i": "eus"},
                    {"i": "eut"},
                    {"i": "ouvons"},
                    {"i": "ouvez"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ouvais"},
                    {"i": "ouvais"},
                    {"i": "ouvait"},
                    {"i": "ouvions"},
                    {"i": "ouviez"},
                    {"i": "ouvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ouvrai"},
                    {"i": "ouvras"},
                    {"i": "ouvra"},
                    {"i": "ouvrons"},
                    {"i": "ouvrez"},
                    {"i": "ouvront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ouvrais"},
                    {"i": "ouvrais"},
                    {"i": "ouvrait"},
                    {"i": "ouvrions"},
                    {"i": "ouvriez"},
                    {"i": "ouvraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "euve"},
                    {"i": "euves"},
                    {"i": "euve"},
                    {"i": "ouvions"},
                    {"i": "ouviez"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "eus"},
                    {"i": "ouvons"},
                    {"i": "ouvez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ouvant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "s:avoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "avoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "avons"},
                    {"i": "avez"},
                    {"i": "avent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "avais"},
                    {"i": "avais"},
                    {"i": "avait"},
                    {"i": "avions"},
                    {"i": "aviez"},
                    {"i": "avaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aurai"},
                    {"i": "auras"},
                    {"i": "aura"},
                    {"i": "aurons"},
                    {"i": "aurez"},
                    {"i": "auront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aurais"},
                    {"i": "aurais"},
                    {"i": "aurait"},
                    {"i": "aurions"},
                    {"i": "auriez"},
                    {"i": "auraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ache"},
                    {"i": "aches"},
                    {"i": "ache"},
                    {"i": "achions"},
                    {"i": "achiez"},
                    {"i": "achent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ache"},
                    {"i": "achons"},
                    {"i": "achez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "achant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "v:ouloir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ouloir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "eux"},
                    {"i": "eux"},
                    {"i": "eut"},
                    {"i": "oulons"},
                    {"i": "oulez"},
                    {"i": "eulent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oulais"},
                    {"i": "oulais"},
                    {"i": "oulait"},
                    {"i": "oulions"},
                    {"i": "ouliez"},
                    {"i": "oulaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oudrai"},
                    {"i": "oudras"},
                    {"i": "oudra"},
                    {"i": "oudrons"},
                    {"i": "oudrez"},
                    {"i": "oudront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "oulus"},
                    {"i": "oulus"},
                    {"i": "oulut"},
                    {"i": "oulûmes"},
                    {"i": "oulûtes"},
                    {"i": "oulurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oudrais"},
                    {"i": "oudrais"},
                    {"i": "oudrait"},
                    {"i": "oudrions"},
                    {"i": "oudriez"},
                    {"i": "oudraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "euille"},
                    {"i": "euilles"},
                    {"i": "euille"},
                    {"i": "oulions"},
                    {"i": "ouliez"},
                    {"i": "euillent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oulusse"},
                    {"i": "oulusses"},
                    {"i": "oulût"},
                    {"i": "oulussions"},
                    {"i": "oulussiez"},
                    {"i": "oulussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "euille"},
                    {"i": "euillons"},
                    {"i": "euillez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oulant"}
            },
            "past-participle": {
                "p": [
                    {"i": "oulu"},
                    {"i": "oulus"},
                    {"i": "oulue"},
                    {"i": "oulues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "va:loir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "loir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ux"},
                    {"i": "ux"},
                    {"i": "ut"},
                    {"i": "lons"},
                    {"i": "lez"},
                    {"i": "lent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lais"},
                    {"i": "lais"},
                    {"i": "lait"},
                    {"i": "lions"},
                    {"i": "liez"},
                    {"i": "laient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "udrai"},
                    {"i": "udras"},
                    {"i": "udra"},
                    {"i": "udrons"},
                    {"i": "udrez"},
                    {"i": "udront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "lus"},
                    {"i": "lus"},
                    {"i": "lut"},
                    {"i": "lûmes"},
                    {"i": "lûtes"},
                    {"i": "lurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "udrais"},
                    {"i": "udrais"},
                    {"i": "udrait"},
                    {"i": "udrions"},
                    {"i": "udriez"},
                    {"i": "udraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ille"},
                    {"i": "illes"},
                    {"i": "ille"},
                    {"i": "lions"},
                    {"i": "liez"},
                    {"i": "illent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lusse"},
                    {"i": "lusses"},
                    {"i": "lût"},
                    {"i": "lussions"},
                    {"i": "lussiez"},
                    {"i": "lussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ux"},
                    {"i": "lons"},
                    {"i": "lez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "lant"}
            },
            "past-participle": {
                "p": [
                    {"i": "lu"},
                    {"i": "lus"},
                    {"i": "lue"},
                    {"i": "lues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "préva:loir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "loir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ux"},
                    {"i": "ux"},
                    {"i": "ut"},
                    {"i": "lons"},
                    {"i": "lez"},
                    {"i": "lent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lais"},
                    {"i": "lais"},
                    {"i": "lait"},
                    {"i": "lions"},
                    {"i": "liez"},
                    {"i": "laient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "udrai"},
                    {"i": "udras"},
                    {"i": "udra"},
                    {"i": "udrons"},
                    {"i": "udrez"},
                    {"i": "udront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "lus"},
                    {"i": "lus"},
                    {"i": "lut"},
                    {"i": "lûmes"},
                    {"i": "lûtes"},
                    {"i": "lurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "udrais"},
                    {"i": "udrais"},
                    {"i": "udrait"},
                    {"i": "udrions"},
                    {"i": "udriez"},
                    {"i": "udraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "le"},
                    {"i": "les"},
                    {"i": "le"},
                    {"i": "lions"},
                    {"i": "liez"},
                    {"i": "lent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lusse"},
                    {"i": "lusses"},
                    {"i": "lût"},
                    {"i": "lussions"},
                    {"i": "lussiez"},
                    {"i": "lussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ux"},
                    {"i": "lons"},
                    {"i": "lez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "lant"}
            },
            "past-participle": {
                "p": [
                    {"i": "lu"},
                    {"i": "lus"},
                    {"i": "lue"},
                    {"i": "lues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "p:ouvoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ouvoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "eux",
                            "uis"
                        ]
                    },
                    {"i": "eux"},
                    {"i": "eut"},
                    {"i": "ouvons"},
                    {"i": "ouvez"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ouvais"},
                    {"i": "ouvais"},
                    {"i": "ouvait"},
                    {"i": "ouvions"},
                    {"i": "ouviez"},
                    {"i": "ouvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ourrai"},
                    {"i": "ourras"},
                    {"i": "ourra"},
                    {"i": "ourrons"},
                    {"i": "ourrez"},
                    {"i": "ourront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ourrais"},
                    {"i": "ourrais"},
                    {"i": "ourrait"},
                    {"i": "ourrions"},
                    {"i": "ourriez"},
                    {"i": "ourraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "uisse"},
                    {"i": "uisses"},
                    {"i": "uisse"},
                    {"i": "uissions"},
                    {"i": "uissiez"},
                    {"i": "uissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ouvant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "v:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "errai"},
                    {"i": "erras"},
                    {"i": "erra"},
                    {"i": "errons"},
                    {"i": "errez"},
                    {"i": "erront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "errais"},
                    {"i": "errais"},
                    {"i": "errait"},
                    {"i": "errions"},
                    {"i": "erriez"},
                    {"i": "erraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "prév:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oirai"},
                    {"i": "oiras"},
                    {"i": "oira"},
                    {"i": "oirons"},
                    {"i": "oirez"},
                    {"i": "oiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oirais"},
                    {"i": "oirais"},
                    {"i": "oirait"},
                    {"i": "oirions"},
                    {"i": "oiriez"},
                    {"i": "oiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ass:eoir",
        "infinitive": {
            "infinitive-present": {
                "p": {
                    "i": [
                        "eoir",
                        "oir"
                    ]
                }
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ieds",
                            "ois"
                        ]
                    },
                    {
                        "i": [
                            "ieds",
                            "ois"
                        ]
                    },
                    {
                        "i": [
                            "ied",
                            "oit"
                        ]
                    },
                    {
                        "i": [
                            "eyons",
                            "oyons"
                        ]
                    },
                    {
                        "i": [
                            "eyez",
                            "oyez"
                        ]
                    },
                    {
                        "i": [
                            "eyent",
                            "oient"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {
                        "i": [
                            "eyais",
                            "oyais"
                        ]
                    },
                    {
                        "i": [
                            "eyais",
                            "oyais"
                        ]
                    },
                    {
                        "i": [
                            "eyait",
                            "oyait"
                        ]
                    },
                    {
                        "i": [
                            "eyions",
                            "oyions"
                        ]
                    },
                    {
                        "i": [
                            "eyiez",
                            "oyiez"
                        ]
                    },
                    {
                        "i": [
                            "eyaient",
                            "oyaient"
                        ]
                    }
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "iérai",
                            "eyerai",
                            "oirai"
                        ]
                    },
                    {
                        "i": [
                            "iéras",
                            "eyeras",
                            "oiras"
                        ]
                    },
                    {
                        "i": [
                            "iéra",
                            "eyera",
                            "oira"
                        ]
                    },
                    {
                        "i": [
                            "iérons",
                            "eyerons",
                            "oirons"
                        ]
                    },
                    {
                        "i": [
                            "iérez",
                            "eyerez",
                            "oirez"
                        ]
                    },
                    {
                        "i": [
                            "iéront",
                            "eyeront",
                            "oiront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "iérais",
                            "eyerais",
                            "oirais"
                        ]
                    },
                    {
                        "i": [
                            "iérais",
                            "eyerais",
                            "oirais"
                        ]
                    },
                    {
                        "i": [
                            "iérait",
                            "eyerait",
                            "oirait"
                        ]
                    },
                    {
                        "i": [
                            "iérions",
                            "eyerions",
                            "oirions"
                        ]
                    },
                    {
                        "i": [
                            "iériez",
                            "eyeriez",
                            "oiriez"
                        ]
                    },
                    {
                        "i": [
                            "iéraient",
                            "eyeraient",
                            "oiraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {
                        "i": [
                            "eye",
                            "oie"
                        ]
                    },
                    {
                        "i": [
                            "eyes",
                            "oies"
                        ]
                    },
                    {
                        "i": [
                            "eye",
                            "oie"
                        ]
                    },
                    {
                        "i": [
                            "eyions",
                            "oyions"
                        ]
                    },
                    {
                        "i": [
                            "eyiez",
                            "oyiez"
                        ]
                    },
                    {
                        "i": [
                            "eyent",
                            "oient"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {
                        "i": [
                            "ieds",
                            "ois"
                        ]
                    },
                    {
                        "i": [
                            "eyons",
                            "oyons"
                        ]
                    },
                    {
                        "i": [
                            "eyez",
                            "oyez"
                        ]
                    }
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {
                    "i": [
                        "eyant",
                        "oyant"
                    ]
                }
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ass:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {
                    "i": [
                        "eoir",
                        "oir"
                    ]
                }
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "ieds",
                            "ois"
                        ]
                    },
                    {
                        "i": [
                            "ieds",
                            "ois"
                        ]
                    },
                    {
                        "i": [
                            "ied",
                            "oit"
                        ]
                    },
                    {
                        "i": [
                            "eyons",
                            "oyons"
                        ]
                    },
                    {
                        "i": [
                            "eyez",
                            "oyez"
                        ]
                    },
                    {
                        "i": [
                            "eyent",
                            "oient"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {
                        "i": [
                            "eyais",
                            "oyais"
                        ]
                    },
                    {
                        "i": [
                            "eyais",
                            "oyais"
                        ]
                    },
                    {
                        "i": [
                            "eyait",
                            "oyait"
                        ]
                    },
                    {
                        "i": [
                            "eyions",
                            "oyions"
                        ]
                    },
                    {
                        "i": [
                            "eyiez",
                            "oyiez"
                        ]
                    },
                    {
                        "i": [
                            "eyaient",
                            "oyaient"
                        ]
                    }
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "iérai",
                            "eyerai",
                            "oirai"
                        ]
                    },
                    {
                        "i": [
                            "iéras",
                            "eyeras",
                            "oiras"
                        ]
                    },
                    {
                        "i": [
                            "iéra",
                            "eyera",
                            "oira"
                        ]
                    },
                    {
                        "i": [
                            "iérons",
                            "eyerons",
                            "oirons"
                        ]
                    },
                    {
                        "i": [
                            "iérez",
                            "eyerez",
                            "oirez"
                        ]
                    },
                    {
                        "i": [
                            "iéront",
                            "eyeront",
                            "oiront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "iérais",
                            "eyerais",
                            "oirais"
                        ]
                    },
                    {
                        "i": [
                            "iérais",
                            "eyerais",
                            "oirais"
                        ]
                    },
                    {
                        "i": [
                            "iérait",
                            "eyerait",
                            "oirait"
                        ]
                    },
                    {
                        "i": [
                            "iérions",
                            "eyerions",
                            "oirions"
                        ]
                    },
                    {
                        "i": [
                            "iériez",
                            "eyeriez",
                            "oiriez"
                        ]
                    },
                    {
                        "i": [
                            "iéraient",
                            "eyeraient",
                            "oiraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {
                        "i": [
                            "eye",
                            "oie"
                        ]
                    },
                    {
                        "i": [
                            "eyes",
                            "oies"
                        ]
                    },
                    {
                        "i": [
                            "eye",
                            "oie"
                        ]
                    },
                    {
                        "i": [
                            "eyions",
                            "oyions"
                        ]
                    },
                    {
                        "i": [
                            "eyiez",
                            "oyiez"
                        ]
                    },
                    {
                        "i": [
                            "eyent",
                            "oient"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {
                        "i": [
                            "ieds",
                            "ois"
                        ]
                    },
                    {
                        "i": [
                            "eyons",
                            "oyons"
                        ]
                    },
                    {
                        "i": [
                            "eyez",
                            "oyez"
                        ]
                    }
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {
                    "i": [
                        "eyant",
                        "oyant"
                    ]
                }
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "surs:eoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "eoirai"},
                    {"i": "eoiras"},
                    {"i": "eoira"},
                    {"i": "eoirons"},
                    {"i": "eoirez"},
                    {"i": "eoiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "eoirais"},
                    {"i": "eoirais"},
                    {"i": "eoirait"},
                    {"i": "eoirions"},
                    {"i": "eoiriez"},
                    {"i": "eoiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "surs:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oirai"},
                    {"i": "oiras"},
                    {"i": "oira"},
                    {"i": "oirons"},
                    {"i": "oirez"},
                    {"i": "oiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oirais"},
                    {"i": "oirais"},
                    {"i": "oirait"},
                    {"i": "oirions"},
                    {"i": "oiriez"},
                    {"i": "oiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "s:eoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "eoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ied"},
                    {"i": "iéent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "eyait"},
                    {"i": "eyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "iéra"},
                    {"i": "iéront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "iérait"},
                    {"i": "iéraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "iée"},
                    {"i": "iéent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {
                    "i": [
                        "éant",
                        "eyant"
                    ]
                }
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "pl:euvoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "euvoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "eut"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "euvait"},
                    {"i": "euvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "euvra"},
                    {"i": "euvront"}
                ]
            },
            "simple-past": {
                "p": {"i": "ut"}
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "euvrait"},
                    {"i": "euvraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "euve"},
                    {"i": "euvent"}
                ]
            },
            "imperfect": {
                "p": {"i": "ût"}
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "euvant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fa:lloir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "lloir"}
            }
        },
        "indicative": {
            "present": {
                "p": {"i": "ut"}
            },
            "imperfect": {
                "p": {"i": "llait"}
            },
            "future": {
                "p": {"i": "udra"}
            },
            "simple-past": {
                "p": {"i": "llut"}
            }
        },
        "conditional": {
            "present": {
                "p": {"i": "udrait"}
            }
        },
        "subjunctive": {
            "present": {
                "p": {"i": "ille"}
            },
            "imperfect": {
                "p": {"i": "llût"}
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {
                "p": {"i": "llu"}
            }
        }
    }),
    new conjugation({
        "-name": "déch:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {
                        "i": [
                            "oit",
                            "et"
                        ]
                    },
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oirai"},
                    {"i": "oiras"},
                    {"i": "oira"},
                    {"i": "oirons"},
                    {"i": "oirez"},
                    {"i": "oiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oirais"},
                    {"i": "oirais"},
                    {"i": "oirait"},
                    {"i": "oirions"},
                    {"i": "oiriez"},
                    {"i": "oiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "pourv:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oirai"},
                    {"i": "oiras"},
                    {"i": "oira"},
                    {"i": "oirons"},
                    {"i": "oirez"},
                    {"i": "oiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oirais"},
                    {"i": "oirais"},
                    {"i": "oirait"},
                    {"i": "oirions"},
                    {"i": "oiriez"},
                    {"i": "oiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ch:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {},
            "future": {
                "p": [
                    {
                        "i": [
                            "oirai",
                            "errai"
                        ]
                    },
                    {
                        "i": [
                            "oiras",
                            "erras"
                        ]
                    },
                    {
                        "i": [
                            "oira",
                            "erra"
                        ]
                    },
                    {
                        "i": [
                            "oirons",
                            "errons"
                        ]
                    },
                    {
                        "i": [
                            "oirez",
                            "errez"
                        ]
                    },
                    {
                        "i": [
                            "oiront",
                            "erront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "oirais",
                            "errais"
                        ]
                    },
                    {
                        "i": [
                            "oirais",
                            "errais"
                        ]
                    },
                    {
                        "i": [
                            "oirait",
                            "errait"
                        ]
                    },
                    {
                        "i": [
                            "oirions",
                            "errions"
                        ]
                    },
                    {
                        "i": [
                            "oiriez",
                            "erriez"
                        ]
                    },
                    {
                        "i": [
                            "oiraient",
                            "erraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {},
            "imperfect": {
                "p": {"i": "ût"}
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {
                    "i": [
                        "oyant",
                        "eyant"
                    ]
                }
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "éch:oir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {
                        "i": [
                            "oit",
                            "et"
                        ]
                    },
                    {
                        "i": [
                            "oient",
                            "éent"
                        ]
                    }
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyait"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "oira",
                            "erra"
                        ]
                    },
                    {
                        "i": [
                            "oiront",
                            "erront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ut"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "oirait",
                            "errait"
                        ]
                    },
                    {
                        "i": [
                            "oiraient",
                            "erraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ût"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "éant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ten:dre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "dre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ds"},
                    {"i": "ds"},
                    {"i": "d"},
                    {"i": "dons"},
                    {"i": "dez"},
                    {"i": "dent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "dais"},
                    {"i": "dais"},
                    {"i": "dait"},
                    {"i": "dions"},
                    {"i": "diez"},
                    {"i": "daient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "drai"},
                    {"i": "dras"},
                    {"i": "dra"},
                    {"i": "drons"},
                    {"i": "drez"},
                    {"i": "dront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "dis"},
                    {"i": "dis"},
                    {"i": "dit"},
                    {"i": "dîmes"},
                    {"i": "dîtes"},
                    {"i": "dirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "drais"},
                    {"i": "drais"},
                    {"i": "drait"},
                    {"i": "drions"},
                    {"i": "driez"},
                    {"i": "draient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "de"},
                    {"i": "des"},
                    {"i": "de"},
                    {"i": "dions"},
                    {"i": "diez"},
                    {"i": "dent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "disse"},
                    {"i": "disses"},
                    {"i": "dît"},
                    {"i": "dissions"},
                    {"i": "dissiez"},
                    {"i": "dissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ds"},
                    {"i": "dons"},
                    {"i": "dez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "dant"}
            },
            "past-participle": {
                "p": [
                    {"i": "du"},
                    {"i": "dus"},
                    {"i": "due"},
                    {"i": "dues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "vain:cre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "cre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "cs"},
                    {"i": "cs"},
                    {"i": "c"},
                    {"i": "quons"},
                    {"i": "quez"},
                    {"i": "quent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "quais"},
                    {"i": "quais"},
                    {"i": "quait"},
                    {"i": "quions"},
                    {"i": "quiez"},
                    {"i": "quaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "crai"},
                    {"i": "cras"},
                    {"i": "cra"},
                    {"i": "crons"},
                    {"i": "crez"},
                    {"i": "cront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "quis"},
                    {"i": "quis"},
                    {"i": "quit"},
                    {"i": "quîmes"},
                    {"i": "quîtes"},
                    {"i": "quirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "crais"},
                    {"i": "crais"},
                    {"i": "crait"},
                    {"i": "crions"},
                    {"i": "criez"},
                    {"i": "craient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "que"},
                    {"i": "ques"},
                    {"i": "que"},
                    {"i": "quions"},
                    {"i": "quiez"},
                    {"i": "quent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "quisse"},
                    {"i": "quisses"},
                    {"i": "quît"},
                    {"i": "quissions"},
                    {"i": "quissiez"},
                    {"i": "quissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "cs"},
                    {"i": "quons"},
                    {"i": "quez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "quant"}
            },
            "past-participle": {
                "p": [
                    {"i": "cu"},
                    {"i": "cus"},
                    {"i": "cue"},
                    {"i": "cues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "bat:tre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "tre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {},
                    {"i": "tons"},
                    {"i": "tez"},
                    {"i": "tent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "tais"},
                    {"i": "tais"},
                    {"i": "tait"},
                    {"i": "tions"},
                    {"i": "tiez"},
                    {"i": "taient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "trai"},
                    {"i": "tras"},
                    {"i": "tra"},
                    {"i": "trons"},
                    {"i": "trez"},
                    {"i": "tront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "tis"},
                    {"i": "tis"},
                    {"i": "tit"},
                    {"i": "tîmes"},
                    {"i": "tîtes"},
                    {"i": "tirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "trais"},
                    {"i": "trais"},
                    {"i": "trait"},
                    {"i": "trions"},
                    {"i": "triez"},
                    {"i": "traient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "te"},
                    {"i": "tes"},
                    {"i": "te"},
                    {"i": "tions"},
                    {"i": "tiez"},
                    {"i": "tent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "tisse"},
                    {"i": "tisses"},
                    {"i": "tît"},
                    {"i": "tissions"},
                    {"i": "tissiez"},
                    {"i": "tissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "tons"},
                    {"i": "tez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "tant"}
            },
            "past-participle": {
                "p": [
                    {"i": "tu"},
                    {"i": "tus"},
                    {"i": "tue"},
                    {"i": "tues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fou:tre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "tre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "tons"},
                    {"i": "tez"},
                    {"i": "tent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "tais"},
                    {"i": "tais"},
                    {"i": "tait"},
                    {"i": "tions"},
                    {"i": "tiez"},
                    {"i": "taient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "trai"},
                    {"i": "tras"},
                    {"i": "tra"},
                    {"i": "trons"},
                    {"i": "trez"},
                    {"i": "tront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "trais"},
                    {"i": "trais"},
                    {"i": "trait"},
                    {"i": "trions"},
                    {"i": "triez"},
                    {"i": "traient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "te"},
                    {"i": "tes"},
                    {"i": "te"},
                    {"i": "tions"},
                    {"i": "tiez"},
                    {"i": "tent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "tons"},
                    {"i": "tez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "tant"}
            },
            "past-participle": {
                "p": [
                    {"i": "tu"},
                    {"i": "tus"},
                    {"i": "tue"},
                    {"i": "tues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "m:ettre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ettre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ets"},
                    {"i": "ets"},
                    {"i": "et"},
                    {"i": "ettons"},
                    {"i": "ettez"},
                    {"i": "ettent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ettais"},
                    {"i": "ettais"},
                    {"i": "ettait"},
                    {"i": "ettions"},
                    {"i": "ettiez"},
                    {"i": "ettaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ettrai"},
                    {"i": "ettras"},
                    {"i": "ettra"},
                    {"i": "ettrons"},
                    {"i": "ettrez"},
                    {"i": "ettront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ettrais"},
                    {"i": "ettrais"},
                    {"i": "ettrait"},
                    {"i": "ettrions"},
                    {"i": "ettriez"},
                    {"i": "ettraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ette"},
                    {"i": "ettes"},
                    {"i": "ette"},
                    {"i": "ettions"},
                    {"i": "ettiez"},
                    {"i": "ettent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ets"},
                    {"i": "ettons"},
                    {"i": "ettez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ettant"}
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "pr:endre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "endre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ends"},
                    {"i": "ends"},
                    {"i": "end"},
                    {"i": "enons"},
                    {"i": "enez"},
                    {"i": "ennent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "enais"},
                    {"i": "enais"},
                    {"i": "enait"},
                    {"i": "enions"},
                    {"i": "eniez"},
                    {"i": "enaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "endrai"},
                    {"i": "endras"},
                    {"i": "endra"},
                    {"i": "endrons"},
                    {"i": "endrez"},
                    {"i": "endront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "endrais"},
                    {"i": "endrais"},
                    {"i": "endrait"},
                    {"i": "endrions"},
                    {"i": "endriez"},
                    {"i": "endraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "enne"},
                    {"i": "ennes"},
                    {"i": "enne"},
                    {"i": "enions"},
                    {"i": "eniez"},
                    {"i": "ennent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ends"},
                    {"i": "enons"},
                    {"i": "enez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "enant"}
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "rom:pre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "pre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ps"},
                    {"i": "ps"},
                    {"i": "pt"},
                    {"i": "pons"},
                    {"i": "pez"},
                    {"i": "pent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "pais"},
                    {"i": "pais"},
                    {"i": "pait"},
                    {"i": "pions"},
                    {"i": "piez"},
                    {"i": "paient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "prai"},
                    {"i": "pras"},
                    {"i": "pra"},
                    {"i": "prons"},
                    {"i": "prez"},
                    {"i": "pront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "pis"},
                    {"i": "pis"},
                    {"i": "pit"},
                    {"i": "pîmes"},
                    {"i": "pîtes"},
                    {"i": "pirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "prais"},
                    {"i": "prais"},
                    {"i": "prait"},
                    {"i": "prions"},
                    {"i": "priez"},
                    {"i": "praient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "pe"},
                    {"i": "pes"},
                    {"i": "pe"},
                    {"i": "pions"},
                    {"i": "piez"},
                    {"i": "pent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "pisse"},
                    {"i": "pisses"},
                    {"i": "pît"},
                    {"i": "pissions"},
                    {"i": "pissiez"},
                    {"i": "pissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ps"},
                    {"i": "pons"},
                    {"i": "pez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "pant"}
            },
            "past-participle": {
                "p": [
                    {"i": "pu"},
                    {"i": "pus"},
                    {"i": "pue"},
                    {"i": "pues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "mou:dre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "dre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ds"},
                    {"i": "ds"},
                    {"i": "d"},
                    {"i": "lons"},
                    {"i": "lez"},
                    {"i": "lent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lais"},
                    {"i": "lais"},
                    {"i": "lait"},
                    {"i": "lions"},
                    {"i": "liez"},
                    {"i": "laient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "drai"},
                    {"i": "dras"},
                    {"i": "dra"},
                    {"i": "drons"},
                    {"i": "drez"},
                    {"i": "dront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "lus"},
                    {"i": "lus"},
                    {"i": "lut"},
                    {"i": "lûmes"},
                    {"i": "lûtes"},
                    {"i": "lurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "drais"},
                    {"i": "drais"},
                    {"i": "drait"},
                    {"i": "drions"},
                    {"i": "driez"},
                    {"i": "draient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "le"},
                    {"i": "les"},
                    {"i": "le"},
                    {"i": "lions"},
                    {"i": "liez"},
                    {"i": "lent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lusse"},
                    {"i": "lusses"},
                    {"i": "lût"},
                    {"i": "lussions"},
                    {"i": "lussiez"},
                    {"i": "lussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ds"},
                    {"i": "lons"},
                    {"i": "lez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "lant"}
            },
            "past-participle": {
                "p": [
                    {"i": "lu"},
                    {"i": "lus"},
                    {"i": "lue"},
                    {"i": "lues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "cou:dre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "dre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ds"},
                    {"i": "ds"},
                    {"i": "d"},
                    {"i": "sons"},
                    {"i": "sez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "sais"},
                    {"i": "sais"},
                    {"i": "sait"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "saient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "drai"},
                    {"i": "dras"},
                    {"i": "dra"},
                    {"i": "drons"},
                    {"i": "drez"},
                    {"i": "dront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "sis"},
                    {"i": "sis"},
                    {"i": "sit"},
                    {"i": "sîmes"},
                    {"i": "sîtes"},
                    {"i": "sirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "drais"},
                    {"i": "drais"},
                    {"i": "drait"},
                    {"i": "drions"},
                    {"i": "driez"},
                    {"i": "draient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "se"},
                    {"i": "ses"},
                    {"i": "se"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "sisse"},
                    {"i": "sisses"},
                    {"i": "sît"},
                    {"i": "sissions"},
                    {"i": "sissiez"},
                    {"i": "sissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ds"},
                    {"i": "sons"},
                    {"i": "sez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "sant"}
            },
            "past-participle": {
                "p": [
                    {"i": "su"},
                    {"i": "sus"},
                    {"i": "sue"},
                    {"i": "sues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "réso:udre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "udre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "lvons"},
                    {"i": "lvez"},
                    {"i": "lvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lvais"},
                    {"i": "lvais"},
                    {"i": "lvait"},
                    {"i": "lvions"},
                    {"i": "lviez"},
                    {"i": "lvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "udrai"},
                    {"i": "udras"},
                    {"i": "udra"},
                    {"i": "udrons"},
                    {"i": "udrez"},
                    {"i": "udront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "lus"},
                    {"i": "lus"},
                    {"i": "lut"},
                    {"i": "lûmes"},
                    {"i": "lûtes"},
                    {"i": "lurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "udrais"},
                    {"i": "udrais"},
                    {"i": "udrait"},
                    {"i": "udrions"},
                    {"i": "udriez"},
                    {"i": "udraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "lve"},
                    {"i": "lves"},
                    {"i": "lve"},
                    {"i": "lvions"},
                    {"i": "lviez"},
                    {"i": "lvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lusse"},
                    {"i": "lusses"},
                    {"i": "lût"},
                    {"i": "lussions"},
                    {"i": "lussiez"},
                    {"i": "lussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "us"},
                    {"i": "lvons"},
                    {"i": "lvez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "lvant"}
            },
            "past-participle": {
                "p": [
                    {"i": "lu"},
                    {"i": "lus"},
                    {"i": "lue"},
                    {"i": "lues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "abso:udre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "udre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "lvons"},
                    {"i": "lvez"},
                    {"i": "lvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lvais"},
                    {"i": "lvais"},
                    {"i": "lvait"},
                    {"i": "lvions"},
                    {"i": "lviez"},
                    {"i": "lvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "udrai"},
                    {"i": "udras"},
                    {"i": "udra"},
                    {"i": "udrons"},
                    {"i": "udrez"},
                    {"i": "udront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "udrais"},
                    {"i": "udrais"},
                    {"i": "udrait"},
                    {"i": "udrions"},
                    {"i": "udriez"},
                    {"i": "udraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "lve"},
                    {"i": "lves"},
                    {"i": "lve"},
                    {"i": "lvions"},
                    {"i": "lviez"},
                    {"i": "lvent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "us"},
                    {"i": "lvons"},
                    {"i": "lvez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "lvant"}
            },
            "past-participle": {
                "p": [
                    {
                        "i": [
                            "us",
                            "ut"
                        ]
                    },
                    {"i": "us"},
                    {"i": "ute"},
                    {"i": "utes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "disso:udre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "udre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "lvons"},
                    {"i": "lvez"},
                    {"i": "lvent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "lvais"},
                    {"i": "lvais"},
                    {"i": "lvait"},
                    {"i": "lvions"},
                    {"i": "lviez"},
                    {"i": "lvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "udrai"},
                    {"i": "udras"},
                    {"i": "udra"},
                    {"i": "udrons"},
                    {"i": "udrez"},
                    {"i": "udront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "udrais"},
                    {"i": "udrais"},
                    {"i": "udrait"},
                    {"i": "udrions"},
                    {"i": "udriez"},
                    {"i": "udraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "lve"},
                    {"i": "lves"},
                    {"i": "lve"},
                    {"i": "lvions"},
                    {"i": "lviez"},
                    {"i": "lvent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "us"},
                    {"i": "lvons"},
                    {"i": "lvez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "lvant"}
            },
            "past-participle": {
                "p": [
                    {
                        "i": [
                            "us",
                            "lu"
                        ]
                    },
                    {
                        "i": [
                            "us",
                            "lus"
                        ]
                    },
                    {
                        "i": [
                            "ute",
                            "lue"
                        ]
                    },
                    {
                        "i": [
                            "utes",
                            "lues"
                        ]
                    }
                ]
            }
        }
    }),
    new conjugation({
        "-name": "crai:ndre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ndre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ns"},
                    {"i": "ns"},
                    {"i": "nt"},
                    {"i": "gnons"},
                    {"i": "gnez"},
                    {"i": "gnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "gnais"},
                    {"i": "gnais"},
                    {"i": "gnait"},
                    {"i": "gnions"},
                    {"i": "gniez"},
                    {"i": "gnaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ndrai"},
                    {"i": "ndras"},
                    {"i": "ndra"},
                    {"i": "ndrons"},
                    {"i": "ndrez"},
                    {"i": "ndront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "gnis"},
                    {"i": "gnis"},
                    {"i": "gnit"},
                    {"i": "gnîmes"},
                    {"i": "gnîtes"},
                    {"i": "gnirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ndrais"},
                    {"i": "ndrais"},
                    {"i": "ndrait"},
                    {"i": "ndrions"},
                    {"i": "ndriez"},
                    {"i": "ndraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "gne"},
                    {"i": "gnes"},
                    {"i": "gne"},
                    {"i": "gnions"},
                    {"i": "gniez"},
                    {"i": "gnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "gnisse"},
                    {"i": "gnisses"},
                    {"i": "gnît"},
                    {"i": "gnissions"},
                    {"i": "gnissiez"},
                    {"i": "gnissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ns"},
                    {"i": "gnons"},
                    {"i": "gnez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "gnant"}
            },
            "past-participle": {
                "p": [
                    {"i": "nt"},
                    {"i": "nts"},
                    {"i": "nte"},
                    {"i": "ntes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "poi:ndre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ndre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ns"},
                    {"i": "ns"},
                    {"i": "nt"},
                    {"i": "gnons"},
                    {"i": "gnez"},
                    {"i": "gnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "gnais"},
                    {"i": "gnais"},
                    {"i": "gnait"},
                    {"i": "gnions"},
                    {"i": "gniez"},
                    {"i": "gnaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ndrai"},
                    {"i": "ndras"},
                    {"i": "ndra"},
                    {"i": "ndrons"},
                    {"i": "ndrez"},
                    {"i": "ndront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "gnis"},
                    {"i": "gnis"},
                    {"i": "gnit"},
                    {"i": "gnîmes"},
                    {"i": "gnîtes"},
                    {"i": "gnirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ndrais"},
                    {"i": "ndrais"},
                    {"i": "ndrait"},
                    {"i": "ndrions"},
                    {"i": "ndriez"},
                    {"i": "ndraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "gne"},
                    {"i": "gnes"},
                    {"i": "gne"},
                    {"i": "gnions"},
                    {"i": "gniez"},
                    {"i": "gnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "gnisse"},
                    {"i": "gnisses"},
                    {"i": "gnît"},
                    {"i": "gnissions"},
                    {"i": "gnissiez"},
                    {"i": "gnissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "gnant"}
            },
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "sui:vre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "vre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "vons"},
                    {"i": "vez"},
                    {"i": "vent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "vais"},
                    {"i": "vais"},
                    {"i": "vait"},
                    {"i": "vions"},
                    {"i": "viez"},
                    {"i": "vaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "vrai"},
                    {"i": "vras"},
                    {"i": "vra"},
                    {"i": "vrons"},
                    {"i": "vrez"},
                    {"i": "vront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "vis"},
                    {"i": "vis"},
                    {"i": "vit"},
                    {"i": "vîmes"},
                    {"i": "vîtes"},
                    {"i": "virent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "vrais"},
                    {"i": "vrais"},
                    {"i": "vrait"},
                    {"i": "vrions"},
                    {"i": "vriez"},
                    {"i": "vraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ve"},
                    {"i": "ves"},
                    {"i": "ve"},
                    {"i": "vions"},
                    {"i": "viez"},
                    {"i": "vent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "visse"},
                    {"i": "visses"},
                    {"i": "vît"},
                    {"i": "vissions"},
                    {"i": "vissiez"},
                    {"i": "vissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "vons"},
                    {"i": "vez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "vant"}
            },
            "past-participle": {
                "p": [
                    {"i": "vi"},
                    {"i": "vis"},
                    {"i": "vie"},
                    {"i": "vies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "v:ivre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ivre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "ivons"},
                    {"i": "ivez"},
                    {"i": "ivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ivais"},
                    {"i": "ivais"},
                    {"i": "ivait"},
                    {"i": "ivions"},
                    {"i": "iviez"},
                    {"i": "ivaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ivrai"},
                    {"i": "ivras"},
                    {"i": "ivra"},
                    {"i": "ivrons"},
                    {"i": "ivrez"},
                    {"i": "ivront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "écus"},
                    {"i": "écus"},
                    {"i": "écut"},
                    {"i": "écûmes"},
                    {"i": "écûtes"},
                    {"i": "écurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ivrais"},
                    {"i": "ivrais"},
                    {"i": "ivrait"},
                    {"i": "ivrions"},
                    {"i": "ivriez"},
                    {"i": "ivraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ive"},
                    {"i": "ives"},
                    {"i": "ive"},
                    {"i": "ivions"},
                    {"i": "iviez"},
                    {"i": "ivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "écusse"},
                    {"i": "écusses"},
                    {"i": "écût"},
                    {"i": "écussions"},
                    {"i": "écussiez"},
                    {"i": "écussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "ivons"},
                    {"i": "ivez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ivant"}
            },
            "past-participle": {
                "p": [
                    {"i": "écu"},
                    {"i": "écus"},
                    {"i": "écue"},
                    {"i": "écues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "rep:aître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "aît"},
                    {"i": "aissons"},
                    {"i": "aissez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aissais"},
                    {"i": "aissais"},
                    {"i": "aissait"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aîtrai"},
                    {"i": "aîtras"},
                    {"i": "aîtra"},
                    {"i": "aîtrons"},
                    {"i": "aîtrez"},
                    {"i": "aîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aîtrais"},
                    {"i": "aîtrais"},
                    {"i": "aîtrait"},
                    {"i": "aîtrions"},
                    {"i": "aîtriez"},
                    {"i": "aîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aisse"},
                    {"i": "aisses"},
                    {"i": "aisse"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aissons"},
                    {"i": "aissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "p:aître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "aît"},
                    {"i": "aissons"},
                    {"i": "aissez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aissais"},
                    {"i": "aissais"},
                    {"i": "aissait"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aîtrai"},
                    {"i": "aîtras"},
                    {"i": "aîtra"},
                    {"i": "aîtrons"},
                    {"i": "aîtrez"},
                    {"i": "aîtront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aîtrais"},
                    {"i": "aîtrais"},
                    {"i": "aîtrait"},
                    {"i": "aîtrions"},
                    {"i": "aîtriez"},
                    {"i": "aîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aisse"},
                    {"i": "aisses"},
                    {"i": "aisse"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "ue"},
                    {"i": "us"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "par:aître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "aît"},
                    {"i": "aissons"},
                    {"i": "aissez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aissais"},
                    {"i": "aissais"},
                    {"i": "aissait"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aîtrai"},
                    {"i": "aîtras"},
                    {"i": "aîtra"},
                    {"i": "aîtrons"},
                    {"i": "aîtrez"},
                    {"i": "aîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aîtrais"},
                    {"i": "aîtrais"},
                    {"i": "aîtrait"},
                    {"i": "aîtrions"},
                    {"i": "aîtriez"},
                    {"i": "aîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aisse"},
                    {"i": "aisses"},
                    {"i": "aisse"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aissons"},
                    {"i": "aissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "n:aître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "aît"},
                    {"i": "aissons"},
                    {"i": "aissez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aissais"},
                    {"i": "aissais"},
                    {"i": "aissait"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aîtrai"},
                    {"i": "aîtras"},
                    {"i": "aîtra"},
                    {"i": "aîtrons"},
                    {"i": "aîtrez"},
                    {"i": "aîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "aquis"},
                    {"i": "aquis"},
                    {"i": "aquit"},
                    {"i": "aquîmes"},
                    {"i": "aquîtes"},
                    {"i": "aquirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aîtrais"},
                    {"i": "aîtrais"},
                    {"i": "aîtrait"},
                    {"i": "aîtrions"},
                    {"i": "aîtriez"},
                    {"i": "aîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aisse"},
                    {"i": "aisses"},
                    {"i": "aisse"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aquisse"},
                    {"i": "aquisses"},
                    {"i": "aquît"},
                    {"i": "aquissions"},
                    {"i": "aquissiez"},
                    {"i": "aquissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aissons"},
                    {"i": "aissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "é"},
                    {"i": "és"},
                    {"i": "ée"},
                    {"i": "ées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "ren:aître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "aît"},
                    {"i": "aissons"},
                    {"i": "aissez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aissais"},
                    {"i": "aissais"},
                    {"i": "aissait"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aîtrai"},
                    {"i": "aîtras"},
                    {"i": "aîtra"},
                    {"i": "aîtrons"},
                    {"i": "aîtrez"},
                    {"i": "aîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "aquis"},
                    {"i": "aquis"},
                    {"i": "aquit"},
                    {"i": "aquîmes"},
                    {"i": "aquîtes"},
                    {"i": "aquirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aîtrais"},
                    {"i": "aîtrais"},
                    {"i": "aîtrait"},
                    {"i": "aîtrions"},
                    {"i": "aîtriez"},
                    {"i": "aîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aisse"},
                    {"i": "aisses"},
                    {"i": "aisse"},
                    {"i": "aissions"},
                    {"i": "aissiez"},
                    {"i": "aissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aquisse"},
                    {"i": "aquisses"},
                    {"i": "aquît"},
                    {"i": "aquissions"},
                    {"i": "aquissiez"},
                    {"i": "aquissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aissons"},
                    {"i": "aissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aissant"}
            },
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "cr:oître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "oîs"},
                    {"i": "oîs"},
                    {"i": "oît"},
                    {"i": "oissons"},
                    {"i": "oissez"},
                    {"i": "oissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oissais"},
                    {"i": "oissais"},
                    {"i": "oissait"},
                    {"i": "oissions"},
                    {"i": "oissiez"},
                    {"i": "oissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oîtrai"},
                    {"i": "oîtras"},
                    {"i": "oîtra"},
                    {"i": "oîtrons"},
                    {"i": "oîtrez"},
                    {"i": "oîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "ûs"},
                    {"i": "ûs"},
                    {"i": "ût"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "ûrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oîtrais"},
                    {"i": "oîtrais"},
                    {"i": "oîtrait"},
                    {"i": "oîtrions"},
                    {"i": "oîtriez"},
                    {"i": "oîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oisse"},
                    {"i": "oisses"},
                    {"i": "oisse"},
                    {"i": "oissions"},
                    {"i": "oissiez"},
                    {"i": "oissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ûsse"},
                    {"i": "ûsses"},
                    {"i": "ût"},
                    {"i": "ûssions"},
                    {"i": "ûssiez"},
                    {"i": "ûssent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oissons"},
                    {"i": "oissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "û"},
                    {"i": "ûs"},
                    {"i": "ûe"},
                    {"i": "ûes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "recr:oître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "oîs"},
                    {"i": "oîs"},
                    {"i": "oît"},
                    {"i": "oissons"},
                    {"i": "oissez"},
                    {"i": "oissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oissais"},
                    {"i": "oissais"},
                    {"i": "oissait"},
                    {"i": "oissions"},
                    {"i": "oissiez"},
                    {"i": "oissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oîtrai"},
                    {"i": "oîtras"},
                    {"i": "oîtra"},
                    {"i": "oîtrons"},
                    {"i": "oîtrez"},
                    {"i": "oîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oîtrais"},
                    {"i": "oîtrais"},
                    {"i": "oîtrait"},
                    {"i": "oîtrions"},
                    {"i": "oîtriez"},
                    {"i": "oîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oisse"},
                    {"i": "oisses"},
                    {"i": "oisse"},
                    {"i": "oissions"},
                    {"i": "oissiez"},
                    {"i": "oissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oissons"},
                    {"i": "oissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "û"},
                    {"i": "ûs"},
                    {"i": "ûe"},
                    {"i": "ûes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "accr:oître",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oître"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "oîs"},
                    {"i": "oîs"},
                    {"i": "oît"},
                    {"i": "oissons"},
                    {"i": "oissez"},
                    {"i": "oissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oissais"},
                    {"i": "oissais"},
                    {"i": "oissait"},
                    {"i": "oissions"},
                    {"i": "oissiez"},
                    {"i": "oissaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oîtrai"},
                    {"i": "oîtras"},
                    {"i": "oîtra"},
                    {"i": "oîtrons"},
                    {"i": "oîtrez"},
                    {"i": "oîtront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oîtrais"},
                    {"i": "oîtrais"},
                    {"i": "oîtrait"},
                    {"i": "oîtrions"},
                    {"i": "oîtriez"},
                    {"i": "oîtraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oisse"},
                    {"i": "oisses"},
                    {"i": "oisse"},
                    {"i": "oissions"},
                    {"i": "oissiez"},
                    {"i": "oissent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oissons"},
                    {"i": "oissez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oissant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "r:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "ions"},
                    {"i": "iez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "iais"},
                    {"i": "iais"},
                    {"i": "iait"},
                    {"i": "iions"},
                    {"i": "iiez"},
                    {"i": "iaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "iions"},
                    {"i": "iiez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "ions"},
                    {"i": "iez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "iant"}
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "circonc:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "isez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "ise"},
                    {"i": "ises"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "concl:ure",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ure"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "uons"},
                    {"i": "uez"},
                    {"i": "uent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "uais"},
                    {"i": "uais"},
                    {"i": "uait"},
                    {"i": "uions"},
                    {"i": "uiez"},
                    {"i": "uaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "urai"},
                    {"i": "uras"},
                    {"i": "ura"},
                    {"i": "urons"},
                    {"i": "urez"},
                    {"i": "uront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "urais"},
                    {"i": "urais"},
                    {"i": "urait"},
                    {"i": "urions"},
                    {"i": "uriez"},
                    {"i": "uraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ue"},
                    {"i": "ues"},
                    {"i": "ue"},
                    {"i": "uions"},
                    {"i": "uiez"},
                    {"i": "uent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "us"},
                    {"i": "uons"},
                    {"i": "uez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "uant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "incl:ure",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ure"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "uons"},
                    {"i": "uez"},
                    {"i": "uent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "uais"},
                    {"i": "uais"},
                    {"i": "uait"},
                    {"i": "uions"},
                    {"i": "uiez"},
                    {"i": "uaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "urai"},
                    {"i": "uras"},
                    {"i": "ura"},
                    {"i": "urons"},
                    {"i": "urez"},
                    {"i": "uront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "urais"},
                    {"i": "urais"},
                    {"i": "urait"},
                    {"i": "urions"},
                    {"i": "uriez"},
                    {"i": "uraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ue"},
                    {"i": "ues"},
                    {"i": "ue"},
                    {"i": "uions"},
                    {"i": "uiez"},
                    {"i": "uent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "us"},
                    {"i": "uons"},
                    {"i": "uez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "uant"}
            },
            "past-participle": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "use"},
                    {"i": "uses"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "nui:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "sons"},
                    {"i": "sez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "sais"},
                    {"i": "sais"},
                    {"i": "sait"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "saient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "rai"},
                    {"i": "ras"},
                    {"i": "ra"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "ront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "sis"},
                    {"i": "sis"},
                    {"i": "sit"},
                    {"i": "sîmes"},
                    {"i": "sîtes"},
                    {"i": "sirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "se"},
                    {"i": "ses"},
                    {"i": "se"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "sisse"},
                    {"i": "sisses"},
                    {"i": "sît"},
                    {"i": "sissions"},
                    {"i": "sissiez"},
                    {"i": "sissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "sons"},
                    {"i": "sez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "sant"}
            },
            "past-participle": {
                "p": {}
            }
        }
    }),
    new conjugation({
        "-name": "lu:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {
                        "i": [
                            "is",
                            "isis"
                        ]
                    },
                    {
                        "i": [
                            "is",
                            "isis"
                        ]
                    },
                    {
                        "i": [
                            "it",
                            "isit"
                        ]
                    },
                    {
                        "i": [
                            "îmes",
                            "isîmes"
                        ]
                    },
                    {
                        "i": [
                            "îtes",
                            "isîtes"
                        ]
                    },
                    {
                        "i": [
                            "irent",
                            "isirent"
                        ]
                    }
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "isez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": {"i": "i"}
            }
        }
    }),
    new conjugation({
        "-name": "condui:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "sons"},
                    {"i": "sez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "sais"},
                    {"i": "sais"},
                    {"i": "sait"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "saient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "rai"},
                    {"i": "ras"},
                    {"i": "ra"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "ront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "sis"},
                    {"i": "sis"},
                    {"i": "sit"},
                    {"i": "sîmes"},
                    {"i": "sîtes"},
                    {"i": "sirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "se"},
                    {"i": "ses"},
                    {"i": "se"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "sisse"},
                    {"i": "sisses"},
                    {"i": "sît"},
                    {"i": "sissions"},
                    {"i": "sissiez"},
                    {"i": "sissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "sons"},
                    {"i": "sez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "sant"}
            },
            "past-participle": {
                "p": [
                    {"i": "t"},
                    {"i": "ts"},
                    {"i": "te"},
                    {"i": "tes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "écri:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "vons"},
                    {"i": "vez"},
                    {"i": "vent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "vais"},
                    {"i": "vais"},
                    {"i": "vait"},
                    {"i": "vions"},
                    {"i": "viez"},
                    {"i": "vaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "rai"},
                    {"i": "ras"},
                    {"i": "ra"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "ront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "vis"},
                    {"i": "vis"},
                    {"i": "vit"},
                    {"i": "vîmes"},
                    {"i": "vîtes"},
                    {"i": "virent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ve"},
                    {"i": "ves"},
                    {"i": "ve"},
                    {"i": "vions"},
                    {"i": "viez"},
                    {"i": "vent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "visse"},
                    {"i": "visses"},
                    {"i": "vît"},
                    {"i": "vissions"},
                    {"i": "vissiez"},
                    {"i": "vissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "s"},
                    {"i": "vons"},
                    {"i": "vez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "vant"}
            },
            "past-participle": {
                "p": [
                    {"i": "t"},
                    {"i": "ts"},
                    {"i": "te"},
                    {"i": "tes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "cr:oire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oirai"},
                    {"i": "oiras"},
                    {"i": "oira"},
                    {"i": "oirons"},
                    {"i": "oirez"},
                    {"i": "oiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oirais"},
                    {"i": "oirais"},
                    {"i": "oirait"},
                    {"i": "oirions"},
                    {"i": "oiriez"},
                    {"i": "oiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "suff:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "isez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "i"},
                    {"i": "is"},
                    {"i": "ie"},
                    {"i": "ies"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "d:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "ites"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "ites"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "interd:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "isez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "méd:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "isez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "préd:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {
                        "i": [
                            "ites",
                            "isez"
                        ]
                    },
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {
                        "i": [
                            "ites",
                            "isez"
                        ]
                    }
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "l:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "isons"},
                    {"i": "isez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isais"},
                    {"i": "isais"},
                    {"i": "isait"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ise"},
                    {"i": "ises"},
                    {"i": "ise"},
                    {"i": "isions"},
                    {"i": "isiez"},
                    {"i": "isent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "isons"},
                    {"i": "isez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "isant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "b:oire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ois"},
                    {"i": "ois"},
                    {"i": "oit"},
                    {"i": "uvons"},
                    {"i": "uvez"},
                    {"i": "oivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "uvais"},
                    {"i": "uvais"},
                    {"i": "uvait"},
                    {"i": "uvions"},
                    {"i": "uviez"},
                    {"i": "uvaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "oirai"},
                    {"i": "oiras"},
                    {"i": "oira"},
                    {"i": "oirons"},
                    {"i": "oirez"},
                    {"i": "oiront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "oirais"},
                    {"i": "oirais"},
                    {"i": "oirait"},
                    {"i": "oirions"},
                    {"i": "oiriez"},
                    {"i": "oiraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oive"},
                    {"i": "oives"},
                    {"i": "oive"},
                    {"i": "uvions"},
                    {"i": "uviez"},
                    {"i": "oivent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ois"},
                    {"i": "uvons"},
                    {"i": "uvez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "uvant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "t:aire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "aisons"},
                    {"i": "aisez"},
                    {"i": "aisent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aisais"},
                    {"i": "aisais"},
                    {"i": "aisait"},
                    {"i": "aisions"},
                    {"i": "aisiez"},
                    {"i": "aisaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "airai"},
                    {"i": "airas"},
                    {"i": "aira"},
                    {"i": "airons"},
                    {"i": "airez"},
                    {"i": "airont"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "airais"},
                    {"i": "airais"},
                    {"i": "airait"},
                    {"i": "airions"},
                    {"i": "airiez"},
                    {"i": "airaient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aise"},
                    {"i": "aises"},
                    {"i": "aise"},
                    {"i": "aisions"},
                    {"i": "aisiez"},
                    {"i": "aisent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aisons"},
                    {"i": "aisez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aisant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "pl:aire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "aît"},
                    {"i": "aisons"},
                    {"i": "aisez"},
                    {"i": "aisent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aisais"},
                    {"i": "aisais"},
                    {"i": "aisait"},
                    {"i": "aisions"},
                    {"i": "aisiez"},
                    {"i": "aisaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "airai"},
                    {"i": "airas"},
                    {"i": "aira"},
                    {"i": "airons"},
                    {"i": "airez"},
                    {"i": "airont"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "us"},
                    {"i": "us"},
                    {"i": "ut"},
                    {"i": "ûmes"},
                    {"i": "ûtes"},
                    {"i": "urent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "airais"},
                    {"i": "airais"},
                    {"i": "airait"},
                    {"i": "airions"},
                    {"i": "airiez"},
                    {"i": "airaient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aise"},
                    {"i": "aises"},
                    {"i": "aise"},
                    {"i": "aisions"},
                    {"i": "aisiez"},
                    {"i": "aisent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "usse"},
                    {"i": "usses"},
                    {"i": "ût"},
                    {"i": "ussions"},
                    {"i": "ussiez"},
                    {"i": "ussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aisons"},
                    {"i": "aisez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aisant"}
            },
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "f:aire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ais"},
                    {"i": "ais"},
                    {"i": "ait"},
                    {"i": "aisons"},
                    {"i": "aites"},
                    {"i": "ont"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "aisais"},
                    {"i": "aisais"},
                    {"i": "aisait"},
                    {"i": "aisions"},
                    {"i": "aisiez"},
                    {"i": "aisaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "erai"},
                    {"i": "eras"},
                    {"i": "era"},
                    {"i": "erons"},
                    {"i": "erez"},
                    {"i": "eront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "îmes"},
                    {"i": "îtes"},
                    {"i": "irent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "erais"},
                    {"i": "erais"},
                    {"i": "erait"},
                    {"i": "erions"},
                    {"i": "eriez"},
                    {"i": "eraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "asse"},
                    {"i": "asses"},
                    {"i": "asse"},
                    {"i": "assions"},
                    {"i": "assiez"},
                    {"i": "assent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "isse"},
                    {"i": "isses"},
                    {"i": "ît"},
                    {"i": "issions"},
                    {"i": "issiez"},
                    {"i": "issent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ais"},
                    {"i": "aisons"},
                    {"i": "aites"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "aisant"}
            },
            "past-participle": {
                "p": [
                    {"i": "ait"},
                    {"i": "aits"},
                    {"i": "aite"},
                    {"i": "aites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "extra:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "yons"},
                    {"i": "yez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "bra:ire",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ire"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "yons"},
                    {"i": "yez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": [
                    {"i": "it"},
                    {"i": "its"},
                    {"i": "ite"},
                    {"i": "ites"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "s:ourdre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ourdre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ourd"},
                    {"i": "ourdent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ourdait"},
                    {"i": "ourdaient"}
                ]
            },
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "cl:ore",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ore"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "os"},
                    {"i": "os"},
                    {"i": "ôt"},
                    {"i": "osent"}
                ]
            },
            "imperfect": {},
            "future": {
                "p": [
                    {"i": "orai"},
                    {"i": "oras"},
                    {"i": "ora"},
                    {"i": "orons"},
                    {"i": "orez"},
                    {"i": "oront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "orais"},
                    {"i": "orais"},
                    {"i": "orait"},
                    {"i": "orions"},
                    {"i": "oriez"},
                    {"i": "oraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ose"},
                    {"i": "oses"},
                    {"i": "ose"},
                    {"i": "osions"},
                    {"i": "osiez"},
                    {"i": "osent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": {"i": "os"}
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "osant"}
            },
            "past-participle": {
                "p": [
                    {"i": "os"},
                    {"i": "os"},
                    {"i": "ose"},
                    {"i": "oses"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "éclo:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {},
            "future": {
                "p": [
                    {"i": "rai"},
                    {"i": "ras"},
                    {"i": "ra"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "ront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "se"},
                    {"i": "ses"},
                    {"i": "se"},
                    {"i": "sions"},
                    {"i": "siez"},
                    {"i": "sent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": {"i": "s"}
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "sant"}
            },
            "past-participle": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "se"},
                    {"i": "ses"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "forclo:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {},
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "se"},
                    {"i": "ses"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "fri:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "t"}
                ]
            },
            "imperfect": {},
            "future": {
                "p": [
                    {"i": "rai"},
                    {"i": "ras"},
                    {"i": "ra"},
                    {"i": "rons"},
                    {"i": "rez"},
                    {"i": "ront"}
                ]
            },
            "simple-past": {}
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "rais"},
                    {"i": "rais"},
                    {"i": "rait"},
                    {"i": "rions"},
                    {"i": "riez"},
                    {"i": "raient"}
                ]
            }
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {
                "p": {"i": "s"}
            }
        },
        "participle": {
            "present-participle": {},
            "past-participle": {
                "p": [
                    {"i": "t"},
                    {"i": "ts"},
                    {"i": "te"},
                    {"i": "tes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "brui:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "t"},
                    {"i": "ssent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "ssait"},
                    {"i": "ssaient"}
                ]
            },
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "sse"},
                    {"i": "ssent"}
                ]
            },
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ssant"}
            },
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "oi:ndre",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ndre"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ns"},
                    {"i": "ns"},
                    {"i": "nt"},
                    {"i": "gnons"},
                    {"i": "gnez"},
                    {"i": "gnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "gnais"},
                    {"i": "gnais"},
                    {"i": "gnait"},
                    {"i": "gnions"},
                    {"i": "gniez"},
                    {"i": "gnaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "ndrai"},
                    {"i": "ndras"},
                    {"i": "ndra"},
                    {"i": "ndrons"},
                    {"i": "ndrez"},
                    {"i": "ndront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "gnis"},
                    {"i": "gnis"},
                    {"i": "gnit"},
                    {"i": "gnîmes"},
                    {"i": "gnîtes"},
                    {"i": "gnirent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "ndrais"},
                    {"i": "ndrais"},
                    {"i": "ndrait"},
                    {"i": "ndrions"},
                    {"i": "ndriez"},
                    {"i": "ndraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "gne"},
                    {"i": "gnes"},
                    {"i": "gne"},
                    {"i": "gnions"},
                    {"i": "gniez"},
                    {"i": "gnent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "gnisse"},
                    {"i": "gnisses"},
                    {"i": "gnît"},
                    {"i": "gnissions"},
                    {"i": "gnissiez"},
                    {"i": "gnissent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "ns"},
                    {"i": "gnons"},
                    {"i": "gnez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "gnant"}
            },
            "past-participle": {
                "p": [
                    {"i": "nt"},
                    {"i": "nts"},
                    {"i": "nte"},
                    {"i": "ntes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "env:oyer",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "oyer"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyons"},
                    {"i": "oyez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyais"},
                    {"i": "oyais"},
                    {"i": "oyait"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oyaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "errai"},
                    {"i": "erras"},
                    {"i": "erra"},
                    {"i": "errons"},
                    {"i": "errez"},
                    {"i": "erront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "oyai"},
                    {"i": "oyas"},
                    {"i": "oya"},
                    {"i": "oyâmes"},
                    {"i": "oyâtes"},
                    {"i": "oyèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "errais"},
                    {"i": "errais"},
                    {"i": "errait"},
                    {"i": "errions"},
                    {"i": "erriez"},
                    {"i": "erraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oies"},
                    {"i": "oie"},
                    {"i": "oyions"},
                    {"i": "oyiez"},
                    {"i": "oient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "oyasse"},
                    {"i": "oyasses"},
                    {"i": "oyât"},
                    {"i": "oyassions"},
                    {"i": "oyassiez"},
                    {"i": "oyassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "oie"},
                    {"i": "oyons"},
                    {"i": "oyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "oyant"}
            },
            "past-participle": {
                "p": [
                    {"i": "oyé"},
                    {"i": "oyés"},
                    {"i": "oyée"},
                    {"i": "oyées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": ":avoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "avoir"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "ai"},
                    {"i": "as"},
                    {"i": "a"},
                    {"i": "avons"},
                    {"i": "avez"},
                    {"i": "ont"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "avais"},
                    {"i": "avais"},
                    {"i": "avait"},
                    {"i": "avions"},
                    {"i": "aviez"},
                    {"i": "avaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "aurai"},
                    {"i": "auras"},
                    {"i": "aura"},
                    {"i": "aurons"},
                    {"i": "aurez"},
                    {"i": "auront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "eus"},
                    {"i": "eus"},
                    {"i": "eut"},
                    {"i": "eûmes"},
                    {"i": "eûtes"},
                    {"i": "eurent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "aurais"},
                    {"i": "aurais"},
                    {"i": "aurait"},
                    {"i": "aurions"},
                    {"i": "auriez"},
                    {"i": "auraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aie"},
                    {"i": "aies"},
                    {"i": "ait"},
                    {"i": "ayons"},
                    {"i": "ayez"},
                    {"i": "aient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "eusse"},
                    {"i": "eusses"},
                    {"i": "eût"},
                    {"i": "eussions"},
                    {"i": "eussiez"},
                    {"i": "eussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "aie"},
                    {"i": "ayons"},
                    {"i": "ayez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ayant"}
            },
            "past-participle": {
                "p": [
                    {"i": "eu"},
                    {"i": "eus"},
                    {"i": "eue"},
                    {"i": "eues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": ":être",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "être"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "suis"},
                    {"i": "es"},
                    {"i": "est"},
                    {"i": "sommes"},
                    {"i": "êtes"},
                    {"i": "sont"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "étais"},
                    {"i": "étais"},
                    {"i": "était"},
                    {"i": "étions"},
                    {"i": "étiez"},
                    {"i": "étaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "serai"},
                    {"i": "seras"},
                    {"i": "sera"},
                    {"i": "serons"},
                    {"i": "serez"},
                    {"i": "seront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "fus"},
                    {"i": "fus"},
                    {"i": "fut"},
                    {"i": "fûmes"},
                    {"i": "fûtes"},
                    {"i": "furent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "serais"},
                    {"i": "serais"},
                    {"i": "serait"},
                    {"i": "serions"},
                    {"i": "seriez"},
                    {"i": "seraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "sois"},
                    {"i": "sois"},
                    {"i": "soit"},
                    {"i": "soyons"},
                    {"i": "soyez"},
                    {"i": "soient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "fusse"},
                    {"i": "fusses"},
                    {"i": "fût"},
                    {"i": "fussions"},
                    {"i": "fussiez"},
                    {"i": "fussent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "sois"},
                    {"i": "soyons"},
                    {"i": "soyez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "étant"}
            },
            "past-participle": {
                "p": {"i": "été"}
            }
        }
    }),
    new conjugation({
        "-name": ":aller",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aller"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "vais"},
                    {"i": "vas"},
                    {"i": "va"},
                    {"i": "allons"},
                    {"i": "allez"},
                    {"i": "vont"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "allais"},
                    {"i": "allais"},
                    {"i": "allait"},
                    {"i": "allions"},
                    {"i": "alliez"},
                    {"i": "allaient"}
                ]
            },
            "future": {
                "p": [
                    {"i": "irai"},
                    {"i": "iras"},
                    {"i": "ira"},
                    {"i": "irons"},
                    {"i": "irez"},
                    {"i": "iront"}
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "allai"},
                    {"i": "allas"},
                    {"i": "alla"},
                    {"i": "allâmes"},
                    {"i": "allâtes"},
                    {"i": "allèrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {"i": "irais"},
                    {"i": "irais"},
                    {"i": "irait"},
                    {"i": "irions"},
                    {"i": "iriez"},
                    {"i": "iraient"}
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "aille"},
                    {"i": "ailles"},
                    {"i": "aille"},
                    {"i": "allions"},
                    {"i": "alliez"},
                    {"i": "aillent"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "allasse"},
                    {"i": "allasses"},
                    {"i": "allât"},
                    {"i": "allassions"},
                    {"i": "allassiez"},
                    {"i": "allassent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "va"},
                    {"i": "allons"},
                    {"i": "allez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "allant"}
            },
            "past-participle": {
                "p": [
                    {"i": "allé"},
                    {"i": "allés"},
                    {"i": "allée"},
                    {"i": "allées"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "app:aroir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "aroir"}
            }
        },
        "indicative": {
            "present": {
                "p": {"i": "ert"}
            },
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "cha:loir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "loir"}
            }
        },
        "indicative": {
            "present": {
                "p": {"i": "ut"}
            },
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": ":ravoir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ravoir"}
            }
        },
        "indicative": {
            "present": {},
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "est:er",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "er"}
            }
        },
        "indicative": {
            "present": {},
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {}
        }
    }),
    new conjugation({
        "-name": "fér:ir",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "ir"}
            }
        },
        "indicative": {
            "present": {},
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {
                "p": [
                    {"i": "u"},
                    {"i": "us"},
                    {"i": "ue"},
                    {"i": "ues"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "o:uïr",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "uïr"}
            }
        },
        "indicative": {
            "present": {
                "p": [
                    {"i": "is"},
                    {"i": "is"},
                    {"i": "it"},
                    {"i": "yons"},
                    {"i": "yez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "yais"},
                    {"i": "yais"},
                    {"i": "yait"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "yaient"}
                ]
            },
            "future": {
                "p": [
                    {
                        "i": [
                            "irai",
                            "uïrai",
                            "rrai"
                        ]
                    },
                    {
                        "i": [
                            "iras",
                            "uïras",
                            "rras"
                        ]
                    },
                    {
                        "i": [
                            "ira",
                            "uïra",
                            "rra"
                        ]
                    },
                    {
                        "i": [
                            "irons",
                            "uïrons",
                            "rrons"
                        ]
                    },
                    {
                        "i": [
                            "irez",
                            "uïrez",
                            "rrez"
                        ]
                    },
                    {
                        "i": [
                            "iront",
                            "uïront",
                            "rront"
                        ]
                    }
                ]
            },
            "simple-past": {
                "p": [
                    {"i": "uïs"},
                    {"i": "uïs"},
                    {"i": "uït"},
                    {"i": "uïmes"},
                    {"i": "uïtes"},
                    {"i": "uïrent"}
                ]
            }
        },
        "conditional": {
            "present": {
                "p": [
                    {
                        "i": [
                            "irais",
                            "uïrais",
                            "rrais"
                        ]
                    },
                    {
                        "i": [
                            "irais",
                            "uïrais",
                            "rrais"
                        ]
                    },
                    {
                        "i": [
                            "irait",
                            "uïrait",
                            "rrait"
                        ]
                    },
                    {
                        "i": [
                            "irions",
                            "uïrions",
                            "rrions"
                        ]
                    },
                    {
                        "i": [
                            "iriez",
                            "uïriez",
                            "rriez"
                        ]
                    },
                    {
                        "i": [
                            "iraient",
                            "uïraient",
                            "rraient"
                        ]
                    }
                ]
            }
        },
        "subjunctive": {
            "present": {
                "p": [
                    {"i": "ie"},
                    {"i": "ies"},
                    {"i": "ie"},
                    {"i": "yions"},
                    {"i": "yiez"},
                    {"i": "ient"}
                ]
            },
            "imperfect": {
                "p": [
                    {"i": "uïsse"},
                    {"i": "uïsses"},
                    {"i": "uït"},
                    {"i": "uïssions"},
                    {"i": "uïssiez"},
                    {"i": "uïssent"}
                ]
            }
        },
        "imperative": {
            "imperative-present": {
                "p": [
                    {"i": "is"},
                    {"i": "yons"},
                    {"i": "yez"}
                ]
            }
        },
        "participle": {
            "present-participle": {
                "p": {"i": "yant"}
            },
            "past-participle": {
                "p": [
                    {"i": "uï"},
                    {"i": "uïs"},
                    {"i": "uïe"},
                    {"i": "uïes"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "occi:re",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "re"}
            }
        },
        "indicative": {
            "present": {},
            "imperfect": {},
            "future": {},
            "simple-past": {}
        },
        "conditional": {
            "present": {}
        },
        "subjunctive": {
            "present": {},
            "imperfect": {}
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {},
            "past-participle": {
                "p": [
                    {"i": "s"},
                    {"i": "s"},
                    {"i": "se"},
                    {"i": "ses"}
                ]
            }
        }
    }),
    new conjugation({
        "-name": "brumass:er",
        "infinitive": {
            "infinitive-present": {
                "p": {"i": "er"}
            }
        },
        "indicative": {
            "present": {
                "p": {"i": "e"}
            },
            "imperfect": {
                "p": {"i": "ait"}
            },
            "future": {
                "p": {"i": "era"}
            },
            "simple-past": {
                "p": {"i": "a"}
            }
        },
        "conditional": {
            "present": {
                "p": {"i": "erait"}
            }
        },
        "subjunctive": {
            "present": {
                "p": {"i": "e"}
            },
            "imperfect": {
                "p": {"i": "ât"}
            }
        },
        "imperative": {
            "imperative-present": {}
        },
        "participle": {
            "present-participle": {
                "p": {"i": "ant"}
            },
            "past-participle": {
                "p": {"i": "é"}
            }
        }
    })
]

export default CONJUGATIONS_LIST