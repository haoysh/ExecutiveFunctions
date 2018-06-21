// Define study
const study = lab.util.fromObject({
  "messageHandlers": {},
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "\u002Fsave",
      "updates": {
        "staging": false
      },
      "callbacks": {
        "full": function full(response) {
        if (response && response.ok) {
          window.location = '/next';
        }
      }
      }
    }
  ],
  "metadata": {
    "title": "Stroop task",
    "description": "An implementation of the classic paradigm introduced by Stroop (1935).",
    "repository": "https:\u002F\u002Fgithub.com\u002Ffelixhenninger\u002Flab.js\u002Fexamples\u002F",
    "contributors": "Felix Henninger \u003Cmailbox@felixhenninger.com\u003E (http:\u002F\u002Ffelixhenninger.com)"
  },
  "responses": {},
  "content": [
    {
      "messageHandlers": {},
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "continue"
      },
      "title": "Instruction",
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EStroop Task\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Cp\u003E\n    Welcome to the \u003Cstrong\u003EStroop experiment\u003C\u002Fstrong\u003E!\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    In this experiment, your task will be to \n    \u003Cstrong\u003Eidentify the color of the word shown \n    on the screen\u003C\u002Fstrong\u003E.\u003Cbr\u003E\n    The word itself is immaterial &mdash; \n    you can safely ignore it.\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    To indicate the color of the word, \n    please use the keys \u003Cstrong\u003Er\u003C\u002Fstrong\u003E, \n    \u003Cstrong\u003Eg\u003C\u002Fstrong\u003E, \u003Cstrong\u003Eb\u003C\u002Fstrong\u003E and \n    \u003Cstrong\u003Eo\u003C\u002Fstrong\u003E for \n    \u003Cspan class=\"stroop-red\"\u003Ered\u003C\u002Fspan\u003E, \n    \u003Cspan class=\"stroop-green\"\u003Egreen\u003C\u002Fspan\u003E, \n    \u003Cspan class=\"stroop-blue\"\u003Eblue\u003C\u002Fspan\u003E and \n    \u003Cspan class=\"stroop-orange\"\u003Eorange\u003C\u002Fspan\u003E, \n    respectively.\u003Cbr\u003E\n    Please answer quickly, and as \n    accurately as you can.\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  Please press the space bar when you're ready.\n\u003C\u002Ffooter\u003E\n"
    },
    {
      "messageHandlers": {},
      "type": "lab.flow.Loop",
      "responses": {},
      "templateParameters": [
        {
          "color": "red",
          "word": "red"
        },
        {
          "color": "red",
          "word": "green"
        },
        {
          "color": "red",
          "word": "blue"
        },
        {
          "color": "red",
          "word": "orange"
        },
        {
          "color": "green",
          "word": "red"
        },
        {
          "color": "green",
          "word": "green"
        },
        {
          "color": "green",
          "word": "blue"
        },
        {
          "color": "green",
          "word": "orange"
        },
        {
          "color": "blue",
          "word": "red"
        },
        {
          "color": "blue",
          "word": "green"
        },
        {
          "color": "blue",
          "word": "blue"
        },
        {
          "color": "blue",
          "word": "orange"
        },
        {
          "color": "orange",
          "word": "red"
        },
        {
          "color": "orange",
          "word": "green"
        },
        {
          "color": "orange",
          "word": "blue"
        },
        {
          "color": "orange",
          "word": "orange"
        }
      ],
      "title": "Stroop task",
      "shuffle": true,
      "template": {
        "messageHandlers": {},
        "type": "lab.flow.Sequence",
        "responses": {},
        "title": "Trial",
        "content": [
          {
            "messageHandlers": {},
            "type": "lab.html.Screen",
            "responses": {},
            "title": "Fixation cross",
            "timeout": "500",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"stroop-fixation stroop-large\"\u003E\n    +\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n"
          },
          {
            "messageHandlers": {},
            "type": "lab.html.Screen",
            "responses": {
              "keypress(r)": "red",
              "keypress(g)": "green",
              "keypress(b)": "blue",
              "keypress(o)": "orange"
            },
            "title": "Stroop screen",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"stroop-${ parameters.color } stroop-large\"\u003E\n    ${ parameters.word }\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n",
            "correctResponse": "${ parameters.color }"
          },
          {
            "messageHandlers": {},
            "type": "lab.html.Screen",
            "responses": {},
            "title": "Inter-trial interval",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "messageHandlers": {},
      "type": "lab.html.Screen",
      "responses": {},
      "title": "Thanks",
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Cp\u003E\n    You did a great job, thanks for taking the time!\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    If you have any questions or comments about this \n    experiment,\u003Cbr\u003E please be invited to contact\n    \u003Ca href=\"http:\u002F\u002Ffelixhenninger.com\"\u003E\n    Felix Henninger\u003C\u002Fa\u003E.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n",
      "timeout": "10"
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()