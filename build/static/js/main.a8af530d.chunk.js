(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    46: function (e, t, a) {
      e.exports = a(56);
    },
    51: function (e, t, a) {},
    55: function (e, t, a) {},
    56: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        i = a.n(n),
        r = a(7),
        o = a.n(r),
        s = (a(51), a(10)),
        l = a(12),
        c = a(18),
        u = a(17),
        h = a(16),
        m = a(93),
        d = a(88),
        p = a(92),
        v = (function (e) {
          Object(u.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.size;
                  return i.a.createElement(
                    d.a,
                    { item: !0, style: { width: "".concat(e, "%") } },
                    i.a.createElement(
                      p.a,
                      { className: this.props.class },
                      this.props.value
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        f = function (e) {
          return i.a.createElement(
            i.a.Fragment,
            null,
            e.cells.map(function (t, a) {
              return i.a.createElement(v, {
                index: a,
                key: t,
                size: 100 / e.size,
                value: t,
                class: e.class,
              });
            })
          );
        },
        g = (function (e) {
          Object(u.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            return Object(s.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(f, {
                      cells: this.props.data,
                      class: this.props.class,
                      size: this.props.data.length,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        b =
          (a(55),
          Object(m.a)(function (e) {
            return {
              root: { color: "#000FFF", flexGrow: 1 },
              paper: {
                fontSize: "1em",
                padding: e.spacing(1),
                textAlign: "center",
                color: e.palette.text.secondary,
              },
            };
          }));
      function y(e) {
        var t = b(),
          a = function (e) {
            var a = e.rows;
            return i.a.createElement(
              i.a.Fragment,
              null,
              a.map(function (e) {
                return i.a.createElement(g, {
                  key: e[0],
                  class: t.paper,
                  data: e,
                });
              })
            );
          };
        return i.a.createElement(
          "div",
          { className: t.root },
          i.a.createElement(
            "h2",
            { className: "title" },
            "Tabelul \xeencruci\u0219\u0103rii"
          ),
          i.a.createElement(
            d.a,
            { container: !0, spacing: 1 },
            i.a.createElement(a, { rows: e.data })
          )
        );
      }
      var O = a(34);
      function E(e) {
        return e
          .split("")
          .sort()
          .sort(function (e, t) {
            return e.localeCompare(t, "en", { sensitivity: "base" });
          })
          .join("");
      }
      var k = function e(t) {
          Object(s.a)(this, e),
            (this.value = t),
            (this.dominance = t.toUpperCase() === t);
        },
        j = function e(t) {
          var a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          Object(s.a)(this, e),
            (this.allele = new k(t)),
            (this.type = "dominant"),
            this.allele.dominance || (this.type = "recessive"),
            void 0 === a &&
              a.length > 0 &&
              (this.trait =
                a[t.toUpperCase()].trait +
                ": " +
                a[t.toUpperCase()][this.type]);
        },
        w = function e(t) {
          Object(s.a)(this, e),
            (this.value = t),
            (this.alleles = [new k(t[0]), new k(t[1])]),
            (this.homozygote = t[0] === t[1]);
        },
        C = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
            Object(s.a)(this, e),
              (t = E(t)),
              (this.value = t),
              (this.genes = []),
              (this.phenotype = []),
              (this.trait = []),
              (this.gamets = this.gamets());
            for (var n = 0; n < t.length; n++)
              n % 2 ||
                (this.genes.push(new w(t[n].concat(t[n + 1]))),
                this.phenotype.push(new j(t[n], a)),
                this.trait.push(new j(t[n], a).trait));
          }
          return (
            Object(l.a)(e, [
              {
                key: "group",
                value: function (e) {
                  for (var t = [], a = [], n = 0; n < e.length; n++)
                    -1 === t.indexOf(e[n].toLowerCase()) &&
                      t.push(e[n].toLowerCase());
                  for (var i = 0; i < t.length; i++)
                    -1 === e.indexOf(t[i].toUpperCase())
                      ? a.push([t[i]])
                      : -1 === e.indexOf(t[i])
                      ? a.push([t[i].toUpperCase()])
                      : a.push([t[i].toUpperCase(), t[i]]);
                  return a;
                },
              },
              {
                key: "rec",
                value: function (e) {
                  var t = this,
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [];
                  return (
                    a === e.length
                      ? n.push(i)
                      : e[a].forEach(function (r) {
                          return t.rec(
                            e,
                            a + 1,
                            n,
                            [].concat(Object(O.a)(i), [r])
                          );
                        }),
                    n
                  );
                },
              },
              {
                key: "combine",
                value: function (e) {
                  e = this.rec(e);
                  for (var t = 0; t < e.length; t++) e[t] = e[t].join("");
                  return e;
                },
              },
              {
                key: "gamets",
                value: function () {
                  return this.combine(
                    this.group(Object(O.a)(new Set(this.value.split(""))))
                  );
                },
              },
            ]),
            e
          );
        })(),
        x = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
            Object(s.a)(this, e),
              (this.traits = a),
              (this.mom = new C(t.mom, a)),
              (this.dad = new C(t.dad, a)),
              (this.kids = this.birth(this.mom, this.dad)),
              (this.genotype = this.calcGenotype().values),
              (this.phenotype = this.calcPhenotype().values),
              (this.ratio = {}),
              (this.ratio.genotype = this.calcGenotype().ratio),
              (this.ratio.phenotype = this.calcPhenotype().ratio),
              (this.table = this.makeTable());
          }
          return (
            Object(l.a)(e, [
              {
                key: "makeTable",
                value: function () {
                  var e = this;
                  if ("" === this.mom.value || "" === this.dad.value) return [];
                  if (void 0 === this.mom.value || void 0 === this.dad.value)
                    return [];
                  var t = [["P\u2193\u2192"]];
                  return (
                    this.dad.gamets.forEach(function (e) {
                      t[0].push(e);
                    }),
                    this.mom.gamets.forEach(function (a) {
                      var n = [a];
                      e.dad.gamets.forEach(function (e) {
                        n.push(E(a.concat(e)));
                      }),
                        t.push(n);
                    }),
                    t
                  );
                },
              },
              {
                key: "calcGenotype",
                value: function () {
                  if ("" === this.mom.value || "" === this.dad.value)
                    return { values: "", ratio: "" };
                  if (void 0 === this.mom.value || void 0 === this.dad.value)
                    return { values: "", ratio: "" };
                  var e = {},
                    t = [],
                    a = "";
                  for (var n in (this.kids.forEach(function (t) {
                    void 0 === e[t.value] ? (e[t.value] = 1) : e[t.value]++;
                  }),
                  e))
                    t.push({ gene: n, value: e[n] });
                  return (
                    t.sort(function (e, t) {
                      return t.value - e.value;
                    }),
                    t.forEach(function (e) {
                      return (a = a + e.value + " : ");
                    }),
                    { values: t, ratio: (a = a.slice(0, a.length - 2)) }
                  );
                },
              },
              {
                key: "calcPhenotype",
                value: function () {
                  if ("" === this.mom.value || "" === this.dad.value)
                    return { values: "", ratio: "" };
                  if (void 0 === this.mom.value || void 0 === this.dad.value)
                    return { values: "", ratio: "" };
                  function e(e) {
                    return e
                      .reduce(function (e, t) {
                        return e.push(t.allele.value), e;
                      }, [])
                      .join("");
                  }
                  var t = {},
                    a = [],
                    n = "";
                  for (var i in (this.kids.forEach(function (a) {
                    void 0 === t[e(a.phenotype)]
                      ? (t[e(a.phenotype)] = 1)
                      : t[e(a.phenotype)]++;
                  }),
                  t))
                    a.push({ phenotype: i, values: t[i] }),
                      (n = n + t[i] + " : ");
                  return (
                    (n = n.slice(0, n.length - 2)),
                    a.sort(function (e, t) {
                      return t.phenotype - e.phenotype;
                    }),
                    { values: a, ratio: n }
                  );
                },
              },
              {
                key: "fusion",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    a = [];
                  return (
                    e.forEach(function (e) {
                      return t.forEach(function (t) {
                        return a.push(E(e.concat(t)));
                      });
                    }),
                    a
                  );
                },
              },
              {
                key: "birth",
                value: function (e, t) {
                  var a = this;
                  if ("" === this.mom.value || "" === this.dad.value) return [];
                  if (void 0 === this.mom.value || void 0 === this.dad.value)
                    return [];
                  var n = this.fusion(e.gamets, t.gamets),
                    i = [];
                  return (
                    n.forEach(function (e) {
                      return i.push(new C(e, a.traits));
                    }),
                    i
                  );
                },
              },
            ]),
            e
          );
        })();
      var S = a(98),
        D = a(97),
        N = a(94),
        z = a(96),
        T = a(95),
        F = a(4),
        U = (function (e) {
          Object(u.a)(a, e);
          var t = Object(h.a)(a);
          function a(e) {
            var n;
            return (
              Object(s.a)(this, a),
              ((n = t.call(this, e)).state = { mom: "", dad: "" }),
              (n.handleChangeOfMom = n.handleChangeOfMom.bind(Object(c.a)(n))),
              (n.handleChangeOfDad = n.handleChangeOfDad.bind(Object(c.a)(n))),
              (n.handleSubmit = n.handleSubmit.bind(Object(c.a)(n))),
              (n.classes = e.classes),
              n
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "handleChangeOfMom",
                value: function (e) {
                  this.setState({ mom: e.target.value });
                },
              },
              {
                key: "handleChangeOfDad",
                value: function (e) {
                  this.setState({ dad: e.target.value });
                },
              },
              {
                key: "handleSubmit",
                value: function (e) {
                  var t = (function (e) {
                    var t = new x(e.parents, e.traits);
                    return console.log(1), t.table;
                  })({ parents: { mom: this.state.mom, dad: this.state.dad } });
                  this.props.handler(t), e.preventDefault();
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    d.a,
                    {
                      container: !0,
                      component: "main",
                      className: this.classes.root,
                    },
                    i.a.createElement(N.a, null),
                    i.a.createElement(d.a, {
                      item: !0,
                      xs: !1,
                      sm: 4,
                      md: 7,
                      className: this.classes.image,
                    }),
                    i.a.createElement(
                      d.a,
                      {
                        item: !0,
                        xs: 12,
                        sm: 8,
                        md: 5,
                        component: p.a,
                        elevation: 6,
                        square: !0,
                      },
                      i.a.createElement(
                        "div",
                        { className: this.classes.paper },
                        i.a.createElement(
                          S.a,
                          { className: this.classes.avatar },
                          i.a.createElement("img", {
                            style: { width: 40, height: 40 },
                            src: "./dna.svg",
                            alt: "",
                          })
                        ),
                        i.a.createElement(
                          T.a,
                          { component: "h1", variant: "h5" },
                          "Introduce\u021bi genotipul p\u0103rin\u021bilor"
                        ),
                        i.a.createElement(
                          "form",
                          {
                            onSubmit: this.handleSubmit,
                            className: this.classes.form,
                            noValidate: !0,
                          },
                          i.a.createElement(z.a, {
                            variant: "outlined",
                            margin: "normal",
                            required: !0,
                            fullWidth: !0,
                            id: "mom",
                            label: "Genotipul Mamei, Exemplu: AaBbCcDD",
                            type: "text",
                            name: "mom",
                            autoFocus: !0,
                            value: this.state.mom,
                            onChange: this.handleChangeOfMom,
                          }),
                          i.a.createElement(z.a, {
                            variant: "outlined",
                            margin: "normal",
                            required: !0,
                            fullWidth: !0,
                            id: "dad",
                            label: "Genotipul Tatalui, Exemplu: AABBCcDd",
                            type: "text",
                            name: "dad",
                            value: this.state.dad,
                            onChange: this.handleChangeOfDad,
                          }),
                          i.a.createElement(
                            D.a,
                            {
                              type: "submit",
                              value: "Submit",
                              fullWidth: !0,
                              variant: "contained",
                              color: "primary",
                              className: this.classes.submit,
                            },
                            "Rezolv\u0103"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        M = Object(F.a)(function (e) {
          return {
            root: { height: "100vh" },
            image: {
              backgroundImage: "url(./dna.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor:
                "light" === e.palette.type
                  ? e.palette.grey[50]
                  : e.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
            paper: {
              margin: e.spacing(8, 4),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        })(U),
        B = (function (e) {
          Object(u.a)(a, e);
          var t = Object(h.a)(a);
          function a(e) {
            var n;
            return (
              Object(s.a)(this, a),
              ((n = t.call(this, e)).fetchToggle = function () {
                n.setState({ fetchToggle: !n.state.fetchToggle });
              }),
              (n.handler = n.handler.bind(Object(c.a)(n))),
              (n.state = { data: [] }),
              n
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "handler",
                value: function (e) {
                  this.setState({ data: e });
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  console.log(1);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  console.log(2);
                },
              },
              {
                key: "render",
                value: function () {
                  return 0 !== this.state.data.length
                    ? i.a.createElement(y, {
                        className: "Table",
                        data: this.state.data,
                      })
                    : i.a.createElement(M, { handler: this.handler });
                },
              },
            ]),
            a
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      o.a.render(
        i.a.createElement(i.a.StrictMode, null, i.a.createElement(B, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[46, 1, 2]],
]);
//# sourceMappingURL=main.a8af530d.chunk.js.map
