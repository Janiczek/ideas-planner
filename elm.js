
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_community$basics_extra$Basics_Extra$turnsPerRadian = 1 / _elm_lang$core$Basics$turns(1);
var _elm_community$basics_extra$Basics_Extra$inTurns = function (angle) {
	return angle * _elm_community$basics_extra$Basics_Extra$turnsPerRadian;
};
var _elm_community$basics_extra$Basics_Extra$inRadians = _elm_lang$core$Basics$identity;
var _elm_community$basics_extra$Basics_Extra$degreesPerRadian = 1 / _elm_lang$core$Basics$degrees(1);
var _elm_community$basics_extra$Basics_Extra$inDegrees = function (angle) {
	return angle * _elm_community$basics_extra$Basics_Extra$degreesPerRadian;
};
var _elm_community$basics_extra$Basics_Extra$fmod = F2(
	function (x, m) {
		return x - (m * _elm_lang$core$Basics$toFloat(
			_elm_lang$core$Basics$floor(x / m)));
	});
var _elm_community$basics_extra$Basics_Extra$maxSafeInteger = Math.pow(2, 53) - 1;
var _elm_community$basics_extra$Basics_Extra$minSafeInteger = 0 - _elm_community$basics_extra$Basics_Extra$maxSafeInteger;
var _elm_community$basics_extra$Basics_Extra$isSafeInteger = function (number) {
	return (_elm_lang$core$Native_Utils.cmp(_elm_community$basics_extra$Basics_Extra$minSafeInteger, number) < 1) && (_elm_lang$core$Native_Utils.cmp(_elm_community$basics_extra$Basics_Extra$maxSafeInteger, number) > -1);
};
var _elm_community$basics_extra$Basics_Extra$swap = function (_p0) {
	var _p1 = _p0;
	return {ctor: '_Tuple2', _0: _p1._1, _1: _p1._0};
};
var _elm_community$basics_extra$Basics_Extra_ops = _elm_community$basics_extra$Basics_Extra_ops || {};
_elm_community$basics_extra$Basics_Extra_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, list) {
		isSubsequenceOf:
		while (true) {
			var _p0 = {ctor: '_Tuple2', _0: subseq, _1: list};
			if (_p0._0.ctor === '[]') {
				return true;
			} else {
				if (_p0._1.ctor === '[]') {
					return false;
				} else {
					var _p1 = _p0._1._1;
					if (_elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0)) {
						var _v1 = _p0._0._1,
							_v2 = _p1;
						subseq = _v1;
						list = _v2;
						continue isSubsequenceOf;
					} else {
						var _v3 = subseq,
							_v4 = _p1;
						subseq = _v3;
						list = _v4;
						continue isSubsequenceOf;
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p2 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p2._0.ctor === '[]') {
			return true;
		} else {
			if (_p2._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p2._0._0, _p2._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p2._0._1, _p2._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$isInfixOfHelp = F3(
	function (infixHead, infixTail, list) {
		isInfixOfHelp:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return false;
			} else {
				var _p4 = _p3._1;
				if (_elm_lang$core$Native_Utils.eq(_p3._0, infixHead)) {
					return A2(_elm_community$list_extra$List_Extra$isPrefixOf, infixTail, _p4);
				} else {
					var _v7 = infixHead,
						_v8 = infixTail,
						_v9 = _p4;
					infixHead = _v7;
					infixTail = _v8;
					list = _v9;
					continue isInfixOfHelp;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infixList, list) {
		var _p5 = infixList;
		if (_p5.ctor === '[]') {
			return true;
		} else {
			return A3(_elm_community$list_extra$List_Extra$isInfixOfHelp, _p5._0, _p5._1, list);
		}
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p9,
				_2: _p10
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p9, _1: _p8._0},
						_1: _p8._1,
						_2: _p8._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p11 = xs;
	if (_p11.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p15 = _p11._1;
		var _p14 = _p11._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p14, _1: _p15},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p12) {
					var _p13 = _p12;
					return {
						ctor: '_Tuple2',
						_0: _p13._0,
						_1: {ctor: '::', _0: _p14, _1: _p13._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p15))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p16 = list;
		if (_p16.ctor === '::') {
			var _p17 = _p16._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p17},
				_1: {ctor: '::', _0: _p17, _1: _p16._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitivelyHelp = F4(
	function (result, currentGroup, compare, list) {
		groupWhileTransitivelyHelp:
		while (true) {
			var _p18 = list;
			if (_p18.ctor === '[]') {
				return _elm_lang$core$List$reverse(
					_elm_lang$core$List$isEmpty(currentGroup) ? result : _elm_lang$core$List$reverse(
						{ctor: '::', _0: currentGroup, _1: result}));
			} else {
				if (_p18._1.ctor === '[]') {
					return _elm_lang$core$List$reverse(
						{
							ctor: '::',
							_0: _elm_lang$core$List$reverse(
								{ctor: '::', _0: _p18._0, _1: currentGroup}),
							_1: result
						});
				} else {
					var _p20 = _p18._1;
					var _p19 = _p18._0;
					if (A2(compare, _p19, _p18._1._0)) {
						var _v17 = result,
							_v18 = {ctor: '::', _0: _p19, _1: currentGroup},
							_v19 = compare,
							_v20 = _p20;
						result = _v17;
						currentGroup = _v18;
						compare = _v19;
						list = _v20;
						continue groupWhileTransitivelyHelp;
					} else {
						var _v21 = {
							ctor: '::',
							_0: _elm_lang$core$List$reverse(
								{ctor: '::', _0: _p19, _1: currentGroup}),
							_1: result
						},
							_v22 = {ctor: '[]'},
							_v23 = compare,
							_v24 = _p20;
						result = _v21;
						currentGroup = _v22;
						compare = _v23;
						list = _v24;
						continue groupWhileTransitivelyHelp;
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (compare, list) {
		return A4(
			_elm_community$list_extra$List_Extra$groupWhileTransitivelyHelp,
			{ctor: '[]'},
			{ctor: '[]'},
			compare,
			list);
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p21 = m;
				if (_p21.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p21._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p21._0._0) ? _elm_lang$core$Maybe$Just(_p21._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p22) {
			var _p23 = _p22;
			var _p24 = _p23._0;
			return (p(x) && _p23._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p24},
				_1: true
			} : {ctor: '_Tuple2', _0: _p24, _1: false};
		});
	return function (_p25) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p25));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p26 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p26.ctor === '_Tuple2') && (_p26._0.ctor === '::')) && (_p26._1.ctor === '::')) {
				var _p27 = A2(_elm_community$list_extra$List_Extra$splitAt, _p26._0._0, list);
				var head = _p27._0;
				var tail = _p27._1;
				var _v28 = _p26._0._1,
					_v29 = tail,
					_v30 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v28;
				list = _v29;
				accu = _v30;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p28 = f(seed);
		if (_p28.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p28._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p28._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$mapAccumr = F3(
	function (f, acc0, list) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, _p29) {
					var _p30 = _p29;
					var _p31 = A2(f, _p30._0, x);
					var acc2 = _p31._0;
					var y = _p31._1;
					return {
						ctor: '_Tuple2',
						_0: acc2,
						_1: {ctor: '::', _0: y, _1: _p30._1}
					};
				}),
			{
				ctor: '_Tuple2',
				_0: acc0,
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_community$list_extra$List_Extra$mapAccuml = F3(
	function (f, acc0, list) {
		var _p32 = A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, _p33) {
					var _p34 = _p33;
					var _p35 = A2(f, _p34._0, x);
					var acc2 = _p35._0;
					var y = _p35._1;
					return {
						ctor: '_Tuple2',
						_0: acc2,
						_1: {ctor: '::', _0: y, _1: _p34._1}
					};
				}),
			{
				ctor: '_Tuple2',
				_0: acc0,
				_1: {ctor: '[]'}
			},
			list);
		var accFinal = _p32._0;
		var generatedList = _p32._1;
		return {
			ctor: '_Tuple2',
			_0: accFinal,
			_1: _elm_lang$core$List$reverse(generatedList)
		};
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p36 = xs_;
		if (_p36.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p36._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p36._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p37 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p36._1);
				if (_p37.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p36._0, _p37._0),
						_1: _p37
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p38 = xs_;
		if (_p38.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p39 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p38._1);
			if (_p39.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p38._0, _p39._0),
					_1: _p39
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p40 = xs_;
		if (_p40.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p40._0, _p40._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p41) {
				var _p42 = _p41;
				var _p43 = _p42._0;
				return {
					ctor: '_Tuple2',
					_0: _p43 - 1,
					_1: A3(func, _p43, x, _p42._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p44) {
				var _p45 = _p44;
				var _p46 = _p45._0;
				return {
					ctor: '_Tuple2',
					_0: _p46 + 1,
					_1: A3(func, _p46, x, _p45._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p47 = m;
						if (_p47.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p47._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p48 = m;
						if (_p48.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p48._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$reverseAppend = F2(
	function (list1, list2) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			list2,
			list1);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (acc, list1, list2) {
		interweaveHelp:
		while (true) {
			var _p49 = {ctor: '_Tuple2', _0: list1, _1: list2};
			if (_p49._0.ctor === '::') {
				if (_p49._1.ctor === '::') {
					var _v44 = {
						ctor: '::',
						_0: _p49._1._0,
						_1: {ctor: '::', _0: _p49._0._0, _1: acc}
					},
						_v45 = _p49._0._1,
						_v46 = _p49._1._1;
					acc = _v44;
					list1 = _v45;
					list2 = _v46;
					continue interweaveHelp;
				} else {
					return A2(_elm_community$list_extra$List_Extra$reverseAppend, acc, list1);
				}
			} else {
				return A2(_elm_community$list_extra$List_Extra$reverseAppend, acc, list2);
			}
		}
	});
var _elm_community$list_extra$List_Extra$interweave = _elm_community$list_extra$List_Extra$interweaveHelp(
	{ctor: '[]'});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p50 = xs_;
	if (_p50.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p51) {
			var _p52 = _p51;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p52._0),
				_elm_community$list_extra$List_Extra$permutations(_p52._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p50));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p53 = xs;
	if (_p53.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p54 = _p53._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p54, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p54,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p53._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$rowsLength = function (listOfLists) {
	var _p55 = listOfLists;
	if (_p55.ctor === '[]') {
		return 0;
	} else {
		return _elm_lang$core$List$length(_p55._0);
	}
};
var _elm_community$list_extra$List_Extra$transpose = function (listOfLists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$map2(
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				})),
		A2(
			_elm_lang$core$List$repeat,
			_elm_community$list_extra$List_Extra$rowsLength(listOfLists),
			{ctor: '[]'}),
		listOfLists);
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p56) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p56));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p57) {
				return !pred(_p57);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeIfIndex = function (predicate) {
	return A2(
		_elm_community$list_extra$List_Extra$indexedFoldr,
		F3(
			function (index, item, acc) {
				return predicate(index) ? acc : {ctor: '::', _0: item, _1: acc};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p58 = tail;
			if (_p58.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p58._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p60, _p59) {
				var _p61 = _p60;
				var _p62 = _p59;
				var result = A2(pred, _p61._0, _p62._0);
				var _p63 = result;
				if (_p63.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p61._1, _p62._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p64 = xs;
		if (_p64.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p66 = _p64._1;
			var _p65 = _p64._0;
			return _elm_lang$core$Native_Utils.eq(x, _p65) ? _p66 : {
				ctor: '::',
				_0: _p65,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p66)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, fn, list) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return list;
		} else {
			var tail = A2(_elm_lang$core$List$drop, index, list);
			var head = A2(_elm_lang$core$List$take, index, list);
			var _p67 = tail;
			if (_p67.ctor === '::') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					head,
					{
						ctor: '::',
						_0: fn(_p67._0),
						_1: _p67._1
					});
			} else {
				return list;
			}
		}
	});
var _elm_community$list_extra$List_Extra$setAt = F2(
	function (index, value) {
		return A2(
			_elm_community$list_extra$List_Extra$updateAt,
			index,
			_elm_lang$core$Basics$always(value));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$count = function (predicate) {
	return A2(
		_elm_lang$core$List$foldl,
		F2(
			function (x, acc) {
				return predicate(x) ? (acc + 1) : acc;
			}),
		0);
};
var _elm_community$list_extra$List_Extra$findIndices = function (predicate) {
	var consIndexIf = F3(
		function (index, x, acc) {
			return predicate(x) ? {ctor: '::', _0: index, _1: acc} : acc;
		});
	return A2(
		_elm_community$list_extra$List_Extra$indexedFoldr,
		consIndexIf,
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			var _p68 = list;
			if (_p68.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				if (predicate(_p68._0)) {
					return _elm_lang$core$Maybe$Just(index);
				} else {
					var _v58 = index + 1,
						_v59 = predicate,
						_v60 = _p68._1;
					index = _v58;
					predicate = _v59;
					list = _v60;
					continue findIndexHelp;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$findIndex = _elm_community$list_extra$List_Extra$findIndexHelp(0);
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p69 = list;
			if (_p69.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p70 = _p69._0;
				if (predicate(_p70)) {
					return _elm_lang$core$Maybe$Just(_p70);
				} else {
					var _v62 = predicate,
						_v63 = _p69._1;
					predicate = _v62;
					list = _v63;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p71) {
		return !A2(_elm_lang$core$List$member, x, _p71);
	};
};
var _elm_community$list_extra$List_Extra$reverseMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$cartesianProduct = function (ll) {
	var _p72 = ll;
	if (_p72.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		return A3(
			_elm_community$list_extra$List_Extra$lift2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p72._0,
			_elm_community$list_extra$List_Extra$cartesianProduct(_p72._1));
	}
};
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			var _p73 = remaining;
			if (_p73.ctor === '[]') {
				return _elm_lang$core$List$reverse(accumulator);
			} else {
				var _p75 = _p73._1;
				var _p74 = _p73._0;
				var computedFirst = f(_p74);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v66 = f,
						_v67 = existing,
						_v68 = _p75,
						_v69 = accumulator;
					f = _v66;
					existing = _v67;
					remaining = _v68;
					accumulator = _v69;
					continue uniqueHelp;
				} else {
					var _v70 = f,
						_v71 = A2(_elm_lang$core$Set$insert, computedFirst, existing),
						_v72 = _p75,
						_v73 = {ctor: '::', _0: _p74, _1: accumulator};
					f = _v70;
					existing = _v71;
					remaining = _v72;
					accumulator = _v73;
					continue uniqueHelp;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A4(
			_elm_community$list_extra$List_Extra$uniqueHelp,
			f,
			_elm_lang$core$Set$empty,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A4(
		_elm_community$list_extra$List_Extra$uniqueHelp,
		_elm_lang$core$Basics$identity,
		_elm_lang$core$Set$empty,
		list,
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p76 = list;
			if (_p76.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p76._0)) {
					var _v75 = predicate,
						_v76 = _p76._1;
					predicate = _v75;
					list = _v76;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p77 = list;
				if (_p77.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p78 = _p77._0;
					if (predicate(_p78)) {
						var _v78 = {ctor: '::', _0: _p78, _1: memo},
							_v79 = _p77._1;
						memo = _v78;
						list = _v79;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p79) {
			return !p(_p79);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p80 = xs_;
		if (_p80.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p82 = _p80._0;
			var _p81 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p82),
				_p80._1);
			var ys = _p81._0;
			var zs = _p81._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p82, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p83) {
				var _p84 = _p83;
				var _p85 = _p84._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p85) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p84._0, _1: _p85};
			});
		var _p86 = ls;
		if (_p86.ctor === '::') {
			if (_p86._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p86._0);
			} else {
				var _p87 = _p86._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p87,
								_1: f(_p87)
							},
							_p86._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p88) {
				var _p89 = _p88;
				var _p90 = _p89._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p90) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p89._0, _1: _p90};
			});
		var _p91 = ls;
		if (_p91.ctor === '::') {
			if (_p91._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p91._0);
			} else {
				var _p92 = _p91._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p92,
								_1: f(_p92)
							},
							_p91._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p93 = xs;
	if (_p93.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p93._0, _1: _p93._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2) || (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0)) {
				return l;
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v86 = index2,
						_v87 = index1,
						_v88 = l;
					index1 = _v86;
					index2 = _v87;
					l = _v88;
					continue swapAt;
				} else {
					var _p94 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
					var part1 = _p94._0;
					var tail1 = _p94._1;
					var _p95 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
					var head2 = _p95._0;
					var tail2 = _p95._1;
					var _p96 = {
						ctor: '_Tuple2',
						_0: _elm_community$list_extra$List_Extra$uncons(head2),
						_1: _elm_community$list_extra$List_Extra$uncons(tail2)
					};
					if (((((_p96.ctor === '_Tuple2') && (_p96._0.ctor === 'Just')) && (_p96._0._0.ctor === '_Tuple2')) && (_p96._1.ctor === 'Just')) && (_p96._1._0.ctor === '_Tuple2')) {
						return _elm_lang$core$List$concat(
							{
								ctor: '::',
								_0: part1,
								_1: {
									ctor: '::',
									_0: {ctor: '::', _0: _p96._1._0._0, _1: _p96._0._0._1},
									_1: {
										ctor: '::',
										_0: {ctor: '::', _0: _p96._0._0._0, _1: _p96._1._0._1},
										_1: {ctor: '[]'}
									}
								}
							});
					} else {
						return l;
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$cycleHelp = F3(
	function (acc, n, list) {
		cycleHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) > 0) {
				var _v90 = A2(_elm_community$list_extra$List_Extra$reverseAppend, list, acc),
					_v91 = n - 1,
					_v92 = list;
				acc = _v90;
				n = _v91;
				list = _v92;
				continue cycleHelp;
			} else {
				return acc;
			}
		}
	});
var _elm_community$list_extra$List_Extra$cycle = F2(
	function (len, list) {
		var cycleLength = _elm_lang$core$List$length(list);
		return (_elm_lang$core$Native_Utils.eq(cycleLength, 0) || _elm_lang$core$Native_Utils.eq(cycleLength, len)) ? list : ((_elm_lang$core$Native_Utils.cmp(cycleLength, len) < 0) ? _elm_lang$core$List$reverse(
			A2(
				_elm_community$list_extra$List_Extra$reverseAppend,
				A2(
					_elm_lang$core$List$take,
					A2(_elm_lang$core$Basics$rem, len, cycleLength),
					list),
				A3(
					_elm_community$list_extra$List_Extra$cycleHelp,
					{ctor: '[]'},
					(len / cycleLength) | 0,
					list))) : A2(_elm_lang$core$List$take, len, list));
	});
var _elm_community$list_extra$List_Extra$initialize = F2(
	function (n, f) {
		var step = F2(
			function (i, acc) {
				step:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(i, 0) < 0) {
						return acc;
					} else {
						var _v93 = i - 1,
							_v94 = {
							ctor: '::',
							_0: f(i),
							_1: acc
						};
						i = _v93;
						acc = _v94;
						continue step;
					}
				}
			});
		return A2(
			step,
			n - 1,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p97 = f(x);
		if (_p97.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p97._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function (items) {
	var _p98 = items;
	if (_p98.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return A2(
			_elm_lang$core$Maybe$map,
			_elm_lang$core$List$reverse,
			_elm_lang$core$List$tail(
				_elm_lang$core$List$reverse(_p98)));
	}
};
var _elm_community$list_extra$List_Extra$last = function (items) {
	last:
	while (true) {
		var _p99 = items;
		if (_p99.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p99._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p99._0);
			} else {
				var _v98 = _p99._1;
				items = _v98;
				continue last;
			}
		}
	}
};

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _mgold$elm_random_pcg$Random_Pcg$toJson = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$list(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Encode$int(_p1._0),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Json_Encode$int(_p1._1),
				_1: {ctor: '[]'}
			}
		});
};
var _mgold$elm_random_pcg$Random_Pcg$mul32 = F2(
	function (a, b) {
		var bl = b & 65535;
		var bh = 65535 & (b >>> 16);
		var al = a & 65535;
		var ah = 65535 & (a >>> 16);
		return 0 | ((al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0));
	});
var _mgold$elm_random_pcg$Random_Pcg$listHelp = F4(
	function (list, n, generate, seed) {
		listHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 1) < 0) {
				return {ctor: '_Tuple2', _0: list, _1: seed};
			} else {
				var _p2 = generate(seed);
				var value = _p2._0;
				var newSeed = _p2._1;
				var _v1 = {ctor: '::', _0: value, _1: list},
					_v2 = n - 1,
					_v3 = generate,
					_v4 = newSeed;
				list = _v1;
				n = _v2;
				generate = _v3;
				seed = _v4;
				continue listHelp;
			}
		}
	});
var _mgold$elm_random_pcg$Random_Pcg$minInt = -2147483648;
var _mgold$elm_random_pcg$Random_Pcg$maxInt = 2147483647;
var _mgold$elm_random_pcg$Random_Pcg$bit27 = 1.34217728e8;
var _mgold$elm_random_pcg$Random_Pcg$bit53 = 9.007199254740992e15;
var _mgold$elm_random_pcg$Random_Pcg$peel = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4._0;
	var word = (_p5 ^ (_p5 >>> ((_p5 >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var _mgold$elm_random_pcg$Random_Pcg$step = F2(
	function (_p6, seed) {
		var _p7 = _p6;
		return _p7._0(seed);
	});
var _mgold$elm_random_pcg$Random_Pcg$retry = F3(
	function (generator, predicate, seed) {
		retry:
		while (true) {
			var _p8 = A2(_mgold$elm_random_pcg$Random_Pcg$step, generator, seed);
			var candidate = _p8._0;
			var newSeed = _p8._1;
			if (predicate(candidate)) {
				return {ctor: '_Tuple2', _0: candidate, _1: newSeed};
			} else {
				var _v7 = generator,
					_v8 = predicate,
					_v9 = newSeed;
				generator = _v7;
				predicate = _v8;
				seed = _v9;
				continue retry;
			}
		}
	});
var _mgold$elm_random_pcg$Random_Pcg$Generator = function (a) {
	return {ctor: 'Generator', _0: a};
};
var _mgold$elm_random_pcg$Random_Pcg$list = F2(
	function (n, _p9) {
		var _p10 = _p9;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed) {
				return A4(
					_mgold$elm_random_pcg$Random_Pcg$listHelp,
					{ctor: '[]'},
					n,
					_p10._0,
					seed);
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$constant = function (value) {
	return _mgold$elm_random_pcg$Random_Pcg$Generator(
		function (seed) {
			return {ctor: '_Tuple2', _0: value, _1: seed};
		});
};
var _mgold$elm_random_pcg$Random_Pcg$map = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p13 = _p12._0(seed0);
				var a = _p13._0;
				var seed1 = _p13._1;
				return {
					ctor: '_Tuple2',
					_0: func(a),
					_1: seed1
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$map2 = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p18 = _p16._0(seed0);
				var a = _p18._0;
				var seed1 = _p18._1;
				var _p19 = _p17._0(seed1);
				var b = _p19._0;
				var seed2 = _p19._1;
				return {
					ctor: '_Tuple2',
					_0: A2(func, a, b),
					_1: seed2
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$pair = F2(
	function (genA, genB) {
		return A3(
			_mgold$elm_random_pcg$Random_Pcg$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			genA,
			genB);
	});
var _mgold$elm_random_pcg$Random_Pcg$andMap = _mgold$elm_random_pcg$Random_Pcg$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _mgold$elm_random_pcg$Random_Pcg$map3 = F4(
	function (func, _p22, _p21, _p20) {
		var _p23 = _p22;
		var _p24 = _p21;
		var _p25 = _p20;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p26 = _p23._0(seed0);
				var a = _p26._0;
				var seed1 = _p26._1;
				var _p27 = _p24._0(seed1);
				var b = _p27._0;
				var seed2 = _p27._1;
				var _p28 = _p25._0(seed2);
				var c = _p28._0;
				var seed3 = _p28._1;
				return {
					ctor: '_Tuple2',
					_0: A3(func, a, b, c),
					_1: seed3
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$map4 = F5(
	function (func, _p32, _p31, _p30, _p29) {
		var _p33 = _p32;
		var _p34 = _p31;
		var _p35 = _p30;
		var _p36 = _p29;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p37 = _p33._0(seed0);
				var a = _p37._0;
				var seed1 = _p37._1;
				var _p38 = _p34._0(seed1);
				var b = _p38._0;
				var seed2 = _p38._1;
				var _p39 = _p35._0(seed2);
				var c = _p39._0;
				var seed3 = _p39._1;
				var _p40 = _p36._0(seed3);
				var d = _p40._0;
				var seed4 = _p40._1;
				return {
					ctor: '_Tuple2',
					_0: A4(func, a, b, c, d),
					_1: seed4
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$map5 = F6(
	function (func, _p45, _p44, _p43, _p42, _p41) {
		var _p46 = _p45;
		var _p47 = _p44;
		var _p48 = _p43;
		var _p49 = _p42;
		var _p50 = _p41;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p51 = _p46._0(seed0);
				var a = _p51._0;
				var seed1 = _p51._1;
				var _p52 = _p47._0(seed1);
				var b = _p52._0;
				var seed2 = _p52._1;
				var _p53 = _p48._0(seed2);
				var c = _p53._0;
				var seed3 = _p53._1;
				var _p54 = _p49._0(seed3);
				var d = _p54._0;
				var seed4 = _p54._1;
				var _p55 = _p50._0(seed4);
				var e = _p55._0;
				var seed5 = _p55._1;
				return {
					ctor: '_Tuple2',
					_0: A5(func, a, b, c, d, e),
					_1: seed5
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$andThen = F2(
	function (callback, _p56) {
		var _p57 = _p56;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed) {
				var _p58 = _p57._0(seed);
				var result = _p58._0;
				var newSeed = _p58._1;
				var _p59 = callback(result);
				var generateB = _p59._0;
				return generateB(newSeed);
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$maybe = F2(
	function (genBool, genA) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$andThen,
			function (b) {
				return b ? A2(_mgold$elm_random_pcg$Random_Pcg$map, _elm_lang$core$Maybe$Just, genA) : _mgold$elm_random_pcg$Random_Pcg$constant(_elm_lang$core$Maybe$Nothing);
			},
			genBool);
	});
var _mgold$elm_random_pcg$Random_Pcg$filter = F2(
	function (predicate, generator) {
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			A2(_mgold$elm_random_pcg$Random_Pcg$retry, generator, predicate));
	});
var _mgold$elm_random_pcg$Random_Pcg$Seed = F2(
	function (a, b) {
		return {ctor: 'Seed', _0: a, _1: b};
	});
var _mgold$elm_random_pcg$Random_Pcg$next = function (_p60) {
	var _p61 = _p60;
	var _p62 = _p61._1;
	return A2(_mgold$elm_random_pcg$Random_Pcg$Seed, ((_p61._0 * 1664525) + _p62) >>> 0, _p62);
};
var _mgold$elm_random_pcg$Random_Pcg$initialSeed = function (x) {
	var _p63 = _mgold$elm_random_pcg$Random_Pcg$next(
		A2(_mgold$elm_random_pcg$Random_Pcg$Seed, 0, 1013904223));
	var state1 = _p63._0;
	var incr = _p63._1;
	var state2 = (state1 + x) >>> 0;
	return _mgold$elm_random_pcg$Random_Pcg$next(
		A2(_mgold$elm_random_pcg$Random_Pcg$Seed, state2, incr));
};
var _mgold$elm_random_pcg$Random_Pcg$generate = F2(
	function (toMsg, generator) {
		return A2(
			_elm_lang$core$Task$perform,
			toMsg,
			A2(
				_elm_lang$core$Task$map,
				function (_p64) {
					return _elm_lang$core$Tuple$first(
						A2(
							_mgold$elm_random_pcg$Random_Pcg$step,
							generator,
							_mgold$elm_random_pcg$Random_Pcg$initialSeed(
								_elm_lang$core$Basics$round(_p64))));
				},
				_elm_lang$core$Time$now));
	});
var _mgold$elm_random_pcg$Random_Pcg$int = F2(
	function (a, b) {
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p65 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p65._0;
				var hi = _p65._1;
				var range = (hi - lo) + 1;
				if (_elm_lang$core$Native_Utils.eq((range - 1) & range, 0)) {
					return {
						ctor: '_Tuple2',
						_0: (((range - 1) & _mgold$elm_random_pcg$Random_Pcg$peel(seed0)) >>> 0) + lo,
						_1: _mgold$elm_random_pcg$Random_Pcg$next(seed0)
					};
				} else {
					var threshhold = A2(_elm_lang$core$Basics$rem, (0 - range) >>> 0, range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var seedN = _mgold$elm_random_pcg$Random_Pcg$next(seed);
							var x = _mgold$elm_random_pcg$Random_Pcg$peel(seed);
							if (_elm_lang$core$Native_Utils.cmp(x, threshhold) < 0) {
								var _v28 = seedN;
								seed = _v28;
								continue accountForBias;
							} else {
								return {
									ctor: '_Tuple2',
									_0: A2(_elm_lang$core$Basics$rem, x, range) + lo,
									_1: seedN
								};
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$bool = A2(
	_mgold$elm_random_pcg$Random_Pcg$map,
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		})(1),
	A2(_mgold$elm_random_pcg$Random_Pcg$int, 0, 1));
var _mgold$elm_random_pcg$Random_Pcg$choice = F2(
	function (x, y) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$map,
			function (b) {
				return b ? x : y;
			},
			_mgold$elm_random_pcg$Random_Pcg$bool);
	});
var _mgold$elm_random_pcg$Random_Pcg$oneIn = function (n) {
	return A2(
		_mgold$elm_random_pcg$Random_Pcg$map,
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(1),
		A2(_mgold$elm_random_pcg$Random_Pcg$int, 1, n));
};
var _mgold$elm_random_pcg$Random_Pcg$sample = function () {
	var find = F2(
		function (k, ys) {
			find:
			while (true) {
				var _p66 = ys;
				if (_p66.ctor === '[]') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_elm_lang$core$Native_Utils.eq(k, 0)) {
						return _elm_lang$core$Maybe$Just(_p66._0);
					} else {
						var _v30 = k - 1,
							_v31 = _p66._1;
						k = _v30;
						ys = _v31;
						continue find;
					}
				}
			}
		});
	return function (xs) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$map,
			function (i) {
				return A2(find, i, xs);
			},
			A2(
				_mgold$elm_random_pcg$Random_Pcg$int,
				0,
				_elm_lang$core$List$length(xs) - 1));
	};
}();
var _mgold$elm_random_pcg$Random_Pcg$float = F2(
	function (min, max) {
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var range = _elm_lang$core$Basics$abs(max - min);
				var n0 = _mgold$elm_random_pcg$Random_Pcg$peel(seed0);
				var hi = _elm_lang$core$Basics$toFloat(67108863 & n0) * 1.0;
				var seed1 = _mgold$elm_random_pcg$Random_Pcg$next(seed0);
				var n1 = _mgold$elm_random_pcg$Random_Pcg$peel(seed1);
				var lo = _elm_lang$core$Basics$toFloat(134217727 & n1) * 1.0;
				var val = ((hi * _mgold$elm_random_pcg$Random_Pcg$bit27) + lo) / _mgold$elm_random_pcg$Random_Pcg$bit53;
				var scaled = (val * range) + min;
				return {
					ctor: '_Tuple2',
					_0: scaled,
					_1: _mgold$elm_random_pcg$Random_Pcg$next(seed1)
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$frequency = function (pairs) {
	var pick = F2(
		function (choices, n) {
			pick:
			while (true) {
				var _p67 = choices;
				if ((_p67.ctor === '::') && (_p67._0.ctor === '_Tuple2')) {
					var _p68 = _p67._0._0;
					if (_elm_lang$core$Native_Utils.cmp(n, _p68) < 1) {
						return _p67._0._1;
					} else {
						var _v33 = _p67._1,
							_v34 = n - _p68;
						choices = _v33;
						n = _v34;
						continue pick;
					}
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Random.Pcg',
						{
							start: {line: 677, column: 13},
							end: {line: 685, column: 77}
						},
						_p67)('Empty list passed to Random.Pcg.frequency!');
				}
			}
		});
	var total = _elm_lang$core$List$sum(
		A2(
			_elm_lang$core$List$map,
			function (_p70) {
				return _elm_lang$core$Basics$abs(
					_elm_lang$core$Tuple$first(_p70));
			},
			pairs));
	return A2(
		_mgold$elm_random_pcg$Random_Pcg$andThen,
		pick(pairs),
		A2(_mgold$elm_random_pcg$Random_Pcg$float, 0, total));
};
var _mgold$elm_random_pcg$Random_Pcg$choices = function (gens) {
	return _mgold$elm_random_pcg$Random_Pcg$frequency(
		A2(
			_elm_lang$core$List$map,
			function (g) {
				return {ctor: '_Tuple2', _0: 1, _1: g};
			},
			gens));
};
var _mgold$elm_random_pcg$Random_Pcg$independentSeed = _mgold$elm_random_pcg$Random_Pcg$Generator(
	function (seed0) {
		var gen = A2(_mgold$elm_random_pcg$Random_Pcg$int, 0, 4294967295);
		var _p71 = A2(
			_mgold$elm_random_pcg$Random_Pcg$step,
			A4(
				_mgold$elm_random_pcg$Random_Pcg$map3,
				F3(
					function (v0, v1, v2) {
						return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
					}),
				gen,
				gen,
				gen),
			seed0);
		var state = _p71._0._0;
		var b = _p71._0._1;
		var c = _p71._0._2;
		var seed1 = _p71._1;
		var incr = (1 | (b ^ c)) >>> 0;
		return {
			ctor: '_Tuple2',
			_0: seed1,
			_1: _mgold$elm_random_pcg$Random_Pcg$next(
				A2(_mgold$elm_random_pcg$Random_Pcg$Seed, state, incr))
		};
	});
var _mgold$elm_random_pcg$Random_Pcg$fastForward = F2(
	function (delta0, _p72) {
		var _p73 = _p72;
		var _p76 = _p73._1;
		var helper = F6(
			function (accMult, accPlus, curMult, curPlus, delta, repeat) {
				helper:
				while (true) {
					var newDelta = delta >>> 1;
					var curMult_ = A2(_mgold$elm_random_pcg$Random_Pcg$mul32, curMult, curMult);
					var curPlus_ = A2(_mgold$elm_random_pcg$Random_Pcg$mul32, curMult + 1, curPlus);
					var _p74 = _elm_lang$core$Native_Utils.eq(delta & 1, 1) ? {
						ctor: '_Tuple2',
						_0: A2(_mgold$elm_random_pcg$Random_Pcg$mul32, accMult, curMult),
						_1: (A2(_mgold$elm_random_pcg$Random_Pcg$mul32, accPlus, curMult) + curPlus) >>> 0
					} : {ctor: '_Tuple2', _0: accMult, _1: accPlus};
					var accMult_ = _p74._0;
					var accPlus_ = _p74._1;
					if (_elm_lang$core$Native_Utils.eq(newDelta, 0)) {
						if ((_elm_lang$core$Native_Utils.cmp(delta0, 0) < 0) && repeat) {
							var _v36 = accMult_,
								_v37 = accPlus_,
								_v38 = curMult_,
								_v39 = curPlus_,
								_v40 = -1,
								_v41 = false;
							accMult = _v36;
							accPlus = _v37;
							curMult = _v38;
							curPlus = _v39;
							delta = _v40;
							repeat = _v41;
							continue helper;
						} else {
							return {ctor: '_Tuple2', _0: accMult_, _1: accPlus_};
						}
					} else {
						var _v42 = accMult_,
							_v43 = accPlus_,
							_v44 = curMult_,
							_v45 = curPlus_,
							_v46 = newDelta,
							_v47 = repeat;
						accMult = _v42;
						accPlus = _v43;
						curMult = _v44;
						curPlus = _v45;
						delta = _v46;
						repeat = _v47;
						continue helper;
					}
				}
			});
		var _p75 = A6(helper, 1, 0, 1664525, _p76, delta0, true);
		var accMultFinal = _p75._0;
		var accPlusFinal = _p75._1;
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$Seed,
			(A2(_mgold$elm_random_pcg$Random_Pcg$mul32, accMultFinal, _p73._0) + accPlusFinal) >>> 0,
			_p76);
	});
var _mgold$elm_random_pcg$Random_Pcg$fromJson = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: A3(
			_elm_lang$core$Json_Decode$map2,
			_mgold$elm_random_pcg$Random_Pcg$Seed,
			A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$int),
			A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$int)),
		_1: {
			ctor: '::',
			_0: A2(_elm_lang$core$Json_Decode$map, _mgold$elm_random_pcg$Random_Pcg$initialSeed, _elm_lang$core$Json_Decode$int),
			_1: {ctor: '[]'}
		}
	});

var _Janiczek$distinct_colors$Internal$moveHue = function (hue) {
	return A2(_elm_community$basics_extra$Basics_Extra$fmod, hue + 222.492235949962, 360);
};
var _Janiczek$distinct_colors$Internal$nextColor = F4(
	function (colorToRecord, changeRecord, recordToColor, color) {
		return recordToColor(
			changeRecord(
				colorToRecord(color)));
	});
var _Janiczek$distinct_colors$Internal$firstHue = A2(_mgold$elm_random_pcg$Random_Pcg$float, 0, 360);
var _Janiczek$distinct_colors$Internal$randomColor = function (makeColor) {
	return A2(_mgold$elm_random_pcg$Random_Pcg$map, makeColor, _Janiczek$distinct_colors$Internal$firstHue);
};
var _Janiczek$distinct_colors$Internal$colors = F3(
	function (makeColor, nextColor, numberOfColors) {
		var step = function (_p0) {
			var _p1 = _p0;
			var _p2 = _p1._1;
			return (_elm_lang$core$Native_Utils.cmp(_p2, 0) > 0) ? _elm_lang$core$Maybe$Just(
				{
					ctor: '_Tuple2',
					_0: nextColor(_p1._0),
					_1: _p2 - 1
				}) : _elm_lang$core$Maybe$Nothing;
		};
		return (_elm_lang$core$Native_Utils.cmp(numberOfColors, 0) > 0) ? A2(
			_mgold$elm_random_pcg$Random_Pcg$map,
			function (color) {
				return A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$first,
					A2(
						_elm_community$list_extra$List_Extra$iterate,
						step,
						{ctor: '_Tuple2', _0: color, _1: numberOfColors - 1}));
			},
			_Janiczek$distinct_colors$Internal$randomColor(makeColor)) : _mgold$elm_random_pcg$Random_Pcg$constant(
			{ctor: '[]'});
	});

var _kuon$elm_hsluv$HSLuv$fromLinear = function (c) {
	return (_elm_lang$core$Native_Utils.cmp(c, 3.1308e-3) < 1) ? (12.92 * c) : ((1.055 * Math.pow(c, 1.0 / 2.4)) - 5.5e-2);
};
var _kuon$elm_hsluv$HSLuv$toLinear = function (c) {
	return (_elm_lang$core$Native_Utils.cmp(c, 4.045e-2) > 0) ? Math.pow((c + 5.5e-2) / 1.055, 2.4) : (c / 12.92);
};
var _kuon$elm_hsluv$HSLuv$epsilon = 8.8564516e-3;
var _kuon$elm_hsluv$HSLuv$kappa = 903.2962962;
var _kuon$elm_hsluv$HSLuv$refV = 0.46831999493879;
var _kuon$elm_hsluv$HSLuv$refU = 0.19783000664283;
var _kuon$elm_hsluv$HSLuv$refY = 1.0;
var _kuon$elm_hsluv$HSLuv$f = function (t) {
	return (_elm_lang$core$Native_Utils.cmp(t, _kuon$elm_hsluv$HSLuv$epsilon) > 0) ? ((116.0 * Math.pow(t / _kuon$elm_hsluv$HSLuv$refY, 1.0 / 3.0)) - 16.0) : ((t / _kuon$elm_hsluv$HSLuv$refY) * _kuon$elm_hsluv$HSLuv$kappa);
};
var _kuon$elm_hsluv$HSLuv$fInv = function (t) {
	return (_elm_lang$core$Native_Utils.cmp(t, 8) > 0) ? (_kuon$elm_hsluv$HSLuv$refY * Math.pow((t + 16.0) / 116.0, 3.0)) : ((_kuon$elm_hsluv$HSLuv$refY * t) / _kuon$elm_hsluv$HSLuv$kappa);
};
var _kuon$elm_hsluv$HSLuv$mInv = {
	ctor: '_Tuple3',
	_0: {ctor: '_Tuple3', _0: 0.41239079926595, _1: 0.35758433938387, _2: 0.18048078840183},
	_1: {ctor: '_Tuple3', _0: 0.21263900587151, _1: 0.71516867876775, _2: 7.2192315360733e-2},
	_2: {ctor: '_Tuple3', _0: 1.9330818715591e-2, _1: 0.11919477979462, _2: 0.95053215224966}
};
var _kuon$elm_hsluv$HSLuv$m = {
	ctor: '_Tuple3',
	_0: {ctor: '_Tuple3', _0: 3.240969941904521, _1: -1.537383177570093, _2: -0.498610760293},
	_1: {ctor: '_Tuple3', _0: -0.96924363628087, _1: 1.87596750150772, _2: 4.1555057407175e-2},
	_2: {ctor: '_Tuple3', _0: 5.5630079696993e-2, _1: -0.20397695888897, _2: 1.056971514242878}
};
var _kuon$elm_hsluv$HSLuv$maxF = 99.9999999;
var _kuon$elm_hsluv$HSLuv$minF = 1.0e-8;
var _kuon$elm_hsluv$HSLuv$dotProduct = F2(
	function (_p1, _p0) {
		var _p2 = _p1;
		var _p3 = _p0;
		return ((_p2._0 * _p3._0) + (_p2._1 * _p3._1)) + (_p2._2 * _p3._2);
	});
var _kuon$elm_hsluv$HSLuv$lengthOfRayUntilIntersect = F2(
	function (theta, _p4) {
		var _p5 = _p4;
		return _p5._1 / (_elm_lang$core$Basics$sin(theta) - (_p5._0 * _elm_lang$core$Basics$cos(theta)));
	});
var _kuon$elm_hsluv$HSLuv$distanceLineFromOrigin = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Basics$abs(_p7._1) / _elm_lang$core$Basics$sqrt(
		Math.pow(_p7._0, 2) + 1);
};
var _kuon$elm_hsluv$HSLuv$getBounds = function (l) {
	var _p8 = _kuon$elm_hsluv$HSLuv$m;
	var m1 = _p8._0;
	var m2 = _p8._1;
	var m3 = _p8._2;
	var sub = Math.pow(l + 16.0, 3.0) / 1560896.0;
	var sub_ = (_elm_lang$core$Native_Utils.cmp(sub, _kuon$elm_hsluv$HSLuv$epsilon) > 0) ? sub : (l / _kuon$elm_hsluv$HSLuv$kappa);
	var compute = F2(
		function (_p9, t) {
			var _p10 = _p9;
			var _p13 = _p10._2;
			var _p12 = _p10._1;
			var _p11 = _p10._0;
			var bottom = (((632260.0 * _p13) - (126452.0 * _p12)) * sub_) + (126452.0 * t);
			var top2 = (((((838422.0 * _p13) + (769860.0 * _p12)) + (731718.0 * _p11)) * l) * sub_) - ((769860.0 * t) * l);
			var top1 = ((284517.0 * _p11) - (94839.0 * _p13)) * sub_;
			return {ctor: '_Tuple2', _0: top1 / bottom, _1: top2 / bottom};
		});
	return {
		ctor: '::',
		_0: A2(compute, m1, 0),
		_1: {
			ctor: '::',
			_0: A2(compute, m1, 1),
			_1: {
				ctor: '::',
				_0: A2(compute, m2, 0),
				_1: {
					ctor: '::',
					_0: A2(compute, m2, 1),
					_1: {
						ctor: '::',
						_0: A2(compute, m3, 0),
						_1: {
							ctor: '::',
							_0: A2(compute, m3, 1),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	};
};
var _kuon$elm_hsluv$HSLuv$maxSafeChromaForL = function (l) {
	var fold = F2(
		function (bound, val) {
			var length = _kuon$elm_hsluv$HSLuv$distanceLineFromOrigin(bound);
			return (_elm_lang$core$Native_Utils.cmp(length, 0) > -1) ? A2(_elm_lang$core$Basics$min, val, length) : val;
		});
	return A3(
		_elm_lang$core$List$foldl,
		fold,
		1.7976931348623157e308,
		_kuon$elm_hsluv$HSLuv$getBounds(l));
};
var _kuon$elm_hsluv$HSLuv$maxSafeChromaForLH = F2(
	function (l, h) {
		var hRad = ((h / 360.0) * _elm_lang$core$Basics$pi) * 2.0;
		var fold = F2(
			function (bound, val) {
				var length = A2(_kuon$elm_hsluv$HSLuv$lengthOfRayUntilIntersect, hRad, bound);
				return (_elm_lang$core$Native_Utils.cmp(length, 0) > -1) ? A2(_elm_lang$core$Basics$min, val, length) : val;
			});
		return A3(
			_elm_lang$core$List$foldl,
			fold,
			1.7976931348623157e308,
			_kuon$elm_hsluv$HSLuv$getBounds(l));
	});
var _kuon$elm_hsluv$HSLuv$lchToHpluv = function (_p14) {
	var _p15 = _p14;
	var _p17 = _p15._0;
	var _p16 = _p15._2;
	return (_elm_lang$core$Native_Utils.cmp(_p17, _kuon$elm_hsluv$HSLuv$maxF) > 0) ? {ctor: '_Tuple3', _0: _p16, _1: 0.0, _2: 100.0} : ((_elm_lang$core$Native_Utils.cmp(_p17, _kuon$elm_hsluv$HSLuv$minF) < 0) ? {ctor: '_Tuple3', _0: _p16, _1: 0.0, _2: 0.0} : {
		ctor: '_Tuple3',
		_0: _p16,
		_1: (_p15._1 / _kuon$elm_hsluv$HSLuv$maxSafeChromaForL(_p17)) * 100.0,
		_2: _p17
	});
};
var _kuon$elm_hsluv$HSLuv$hpluvToLch = function (_p18) {
	var _p19 = _p18;
	var _p21 = _p19._2;
	var _p20 = _p19._0;
	return (_elm_lang$core$Native_Utils.cmp(_p21, _kuon$elm_hsluv$HSLuv$maxF) > 0) ? {ctor: '_Tuple3', _0: 100.0, _1: 0, _2: _p20} : ((_elm_lang$core$Native_Utils.cmp(_p21, _kuon$elm_hsluv$HSLuv$minF) < 0) ? {ctor: '_Tuple3', _0: 0.0, _1: 0.0, _2: _p20} : {
		ctor: '_Tuple3',
		_0: _p21,
		_1: (_kuon$elm_hsluv$HSLuv$maxSafeChromaForL(_p21) / 100.0) * _p19._1,
		_2: _p20
	});
};
var _kuon$elm_hsluv$HSLuv$lchToHsluv = function (_p22) {
	var _p23 = _p22;
	var _p25 = _p23._0;
	var _p24 = _p23._2;
	if (_elm_lang$core$Native_Utils.cmp(_p25, _kuon$elm_hsluv$HSLuv$maxF) > 0) {
		return {ctor: '_Tuple3', _0: _p24, _1: 0, _2: 100.0};
	} else {
		if (_elm_lang$core$Native_Utils.cmp(_p25, _kuon$elm_hsluv$HSLuv$minF) < 0) {
			return {ctor: '_Tuple3', _0: _p24, _1: 0.0, _2: 0.0};
		} else {
			var maxChroma = A2(_kuon$elm_hsluv$HSLuv$maxSafeChromaForLH, _p25, _p24);
			return {ctor: '_Tuple3', _0: _p24, _1: (_p23._1 / maxChroma) * 100.0, _2: _p25};
		}
	}
};
var _kuon$elm_hsluv$HSLuv$hsluvToLch = function (_p26) {
	var _p27 = _p26;
	var _p29 = _p27._2;
	var _p28 = _p27._0;
	return (_elm_lang$core$Native_Utils.cmp(_p29, _kuon$elm_hsluv$HSLuv$maxF) > 0) ? {ctor: '_Tuple3', _0: 100.0, _1: 0, _2: _p28} : ((_elm_lang$core$Native_Utils.cmp(_p29, _kuon$elm_hsluv$HSLuv$minF) < 0) ? {ctor: '_Tuple3', _0: 0.0, _1: 0.0, _2: _p28} : {
		ctor: '_Tuple3',
		_0: _p29,
		_1: (A2(_kuon$elm_hsluv$HSLuv$maxSafeChromaForLH, _p29, _p28) / 100.0) * _p27._1,
		_2: _p28
	});
};
var _kuon$elm_hsluv$HSLuv$luvToXyz = function (_p30) {
	var _p31 = _p30;
	var _p32 = _p31._0;
	if (_elm_lang$core$Native_Utils.eq(_p32, 0)) {
		return {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0};
	} else {
		var varV = (_p31._2 / (13.0 * _p32)) + _kuon$elm_hsluv$HSLuv$refV;
		var varU = (_p31._1 / (13.0 * _p32)) + _kuon$elm_hsluv$HSLuv$refU;
		var varY = _kuon$elm_hsluv$HSLuv$fInv(_p32);
		var y = varY * _kuon$elm_hsluv$HSLuv$refY;
		var x = 0.0 - (((9.0 * y) * varU) / (((varU - 4.0) * varV) - (varU * varV)));
		var z = (((9.0 * y) - ((15.0 * varV) * y)) - (varV * x)) / (3.0 * varV);
		return {ctor: '_Tuple3', _0: x, _1: y, _2: z};
	}
};
var _kuon$elm_hsluv$HSLuv$xyzToLuv = function (_p33) {
	var _p34 = _p33;
	var _p37 = _p34._2;
	var _p36 = _p34._1;
	var _p35 = _p34._0;
	var l = _kuon$elm_hsluv$HSLuv$f(_p36);
	if (_elm_lang$core$Native_Utils.eq(l, 0) || (_elm_lang$core$Native_Utils.eq(_p35, 0) && (_elm_lang$core$Native_Utils.eq(_p36, 0) && _elm_lang$core$Native_Utils.eq(_p37, 0)))) {
		return {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0};
	} else {
		var varV = (9.0 * _p36) / ((_p35 + (15.0 * _p36)) + (3.0 * _p37));
		var v = (13.0 * l) * (varV - _kuon$elm_hsluv$HSLuv$refV);
		var varU = (4.0 * _p35) / ((_p35 + (15.0 * _p36)) + (3.0 * _p37));
		var u = (13.0 * l) * (varU - _kuon$elm_hsluv$HSLuv$refU);
		return {ctor: '_Tuple3', _0: l, _1: u, _2: v};
	}
};
var _kuon$elm_hsluv$HSLuv$rgbToXyz = function (_p38) {
	var _p39 = _p38;
	var rgb_ = {
		ctor: '_Tuple3',
		_0: _kuon$elm_hsluv$HSLuv$toLinear(_p39._0),
		_1: _kuon$elm_hsluv$HSLuv$toLinear(_p39._1),
		_2: _kuon$elm_hsluv$HSLuv$toLinear(_p39._2)
	};
	var _p40 = _kuon$elm_hsluv$HSLuv$mInv;
	var m1 = _p40._0;
	var m2 = _p40._1;
	var m3 = _p40._2;
	return {
		ctor: '_Tuple3',
		_0: A2(_kuon$elm_hsluv$HSLuv$dotProduct, m1, rgb_),
		_1: A2(_kuon$elm_hsluv$HSLuv$dotProduct, m2, rgb_),
		_2: A2(_kuon$elm_hsluv$HSLuv$dotProduct, m3, rgb_)
	};
};
var _kuon$elm_hsluv$HSLuv$xyzToRgb = function (xyz) {
	var _p41 = _kuon$elm_hsluv$HSLuv$m;
	var m1 = _p41._0;
	var m2 = _p41._1;
	var m3 = _p41._2;
	var _p42 = {
		ctor: '_Tuple3',
		_0: A2(_kuon$elm_hsluv$HSLuv$dotProduct, m1, xyz),
		_1: A2(_kuon$elm_hsluv$HSLuv$dotProduct, m2, xyz),
		_2: A2(_kuon$elm_hsluv$HSLuv$dotProduct, m3, xyz)
	};
	var a = _p42._0;
	var b = _p42._1;
	var c = _p42._2;
	return {
		ctor: '_Tuple3',
		_0: _kuon$elm_hsluv$HSLuv$fromLinear(a),
		_1: _kuon$elm_hsluv$HSLuv$fromLinear(b),
		_2: _kuon$elm_hsluv$HSLuv$fromLinear(c)
	};
};
var _kuon$elm_hsluv$HSLuv$luvToLch = function (_p43) {
	var _p44 = _p43;
	var _p46 = _p44._2;
	var _p45 = _p44._1;
	var c = _elm_lang$core$Basics$sqrt((_p45 * _p45) + (_p46 * _p46));
	var h = (_elm_lang$core$Native_Utils.cmp(c, _kuon$elm_hsluv$HSLuv$minF) < 0) ? 0 : ((A2(_elm_lang$core$Basics$atan2, _p46, _p45) * 180.0) / _elm_lang$core$Basics$pi);
	var h_ = (_elm_lang$core$Native_Utils.cmp(h, 0) < 0) ? (360 + h) : h;
	return {ctor: '_Tuple3', _0: _p44._0, _1: c, _2: h_};
};
var _kuon$elm_hsluv$HSLuv$lchToLuv = function (_p47) {
	var _p48 = _p47;
	var _p49 = _p48._1;
	var hRad = ((_p48._2 / 360.0) * 2.0) * _elm_lang$core$Basics$pi;
	return {
		ctor: '_Tuple3',
		_0: _p48._0,
		_1: _elm_lang$core$Basics$cos(hRad) * _p49,
		_2: _elm_lang$core$Basics$sin(hRad) * _p49
	};
};
var _kuon$elm_hsluv$HSLuv$rgbToHpluv = function (_p50) {
	return _kuon$elm_hsluv$HSLuv$lchToHpluv(
		_kuon$elm_hsluv$HSLuv$luvToLch(
			_kuon$elm_hsluv$HSLuv$xyzToLuv(
				_kuon$elm_hsluv$HSLuv$rgbToXyz(_p50))));
};
var _kuon$elm_hsluv$HSLuv$rgbToHsluv = function (_p51) {
	return _kuon$elm_hsluv$HSLuv$lchToHsluv(
		_kuon$elm_hsluv$HSLuv$luvToLch(
			_kuon$elm_hsluv$HSLuv$xyzToLuv(
				_kuon$elm_hsluv$HSLuv$rgbToXyz(_p51))));
};
var _kuon$elm_hsluv$HSLuv$hpluvToRgb = function (_p52) {
	return _kuon$elm_hsluv$HSLuv$xyzToRgb(
		_kuon$elm_hsluv$HSLuv$luvToXyz(
			_kuon$elm_hsluv$HSLuv$lchToLuv(
				_kuon$elm_hsluv$HSLuv$hpluvToLch(_p52))));
};
var _kuon$elm_hsluv$HSLuv$hsluvToRgb = function (_p53) {
	return _kuon$elm_hsluv$HSLuv$xyzToRgb(
		_kuon$elm_hsluv$HSLuv$luvToXyz(
			_kuon$elm_hsluv$HSLuv$lchToLuv(
				_kuon$elm_hsluv$HSLuv$hsluvToLch(_p53))));
};
var _kuon$elm_hsluv$HSLuv$toHsluv = function (color) {
	var _p54 = _elm_lang$core$Color$toRgb(color);
	var red = _p54.red;
	var green = _p54.green;
	var blue = _p54.blue;
	var alpha = _p54.alpha;
	var _p55 = _kuon$elm_hsluv$HSLuv$rgbToHsluv(
		{
			ctor: '_Tuple3',
			_0: _elm_lang$core$Basics$toFloat(red) / 255.0,
			_1: _elm_lang$core$Basics$toFloat(green) / 255.0,
			_2: _elm_lang$core$Basics$toFloat(blue) / 255.0
		});
	var h = _p55._0;
	var s = _p55._1;
	var l = _p55._2;
	return {hue: h, saturation: s, lightness: l, alpha: alpha};
};
var _kuon$elm_hsluv$HSLuv$hsluva = F4(
	function (h, s, l, a) {
		var _p56 = _kuon$elm_hsluv$HSLuv$hsluvToRgb(
			{ctor: '_Tuple3', _0: h, _1: s, _2: l});
		var r = _p56._0;
		var g = _p56._1;
		var b = _p56._2;
		return A4(
			_elm_lang$core$Color$rgba,
			_elm_lang$core$Basics$round(r * 255),
			_elm_lang$core$Basics$round(g * 255),
			_elm_lang$core$Basics$round(b * 255),
			a);
	});
var _kuon$elm_hsluv$HSLuv$hsluv = F3(
	function (h, s, l) {
		return A4(_kuon$elm_hsluv$HSLuv$hsluva, h, s, l, 1);
	});

var _Janiczek$distinct_colors$DistinctColors_HSLuv$recordToColor = function (_p0) {
	var _p1 = _p0;
	return A4(_kuon$elm_hsluv$HSLuv$hsluva, _p1.hue, _p1.saturation, _p1.lightness, _p1.alpha);
};
var _Janiczek$distinct_colors$DistinctColors_HSLuv$colorToRecord = function (color) {
	return _kuon$elm_hsluv$HSLuv$toHsluv(color);
};
var _Janiczek$distinct_colors$DistinctColors_HSLuv$randomColor = function (_p2) {
	var _p3 = _p2;
	return _Janiczek$distinct_colors$Internal$randomColor(
		function (hue) {
			return A4(_kuon$elm_hsluv$HSLuv$hsluva, hue, _p3.saturation * 100, _p3.lightness * 100, _p3.alpha);
		});
};
var _Janiczek$distinct_colors$DistinctColors_HSLuv$nextColor = function (color) {
	return A4(
		_Janiczek$distinct_colors$Internal$nextColor,
		_Janiczek$distinct_colors$DistinctColors_HSLuv$colorToRecord,
		function (record) {
			return _elm_lang$core$Native_Utils.update(
				record,
				{
					hue: _Janiczek$distinct_colors$Internal$moveHue(record.hue)
				});
		},
		_Janiczek$distinct_colors$DistinctColors_HSLuv$recordToColor,
		color);
};
var _Janiczek$distinct_colors$DistinctColors_HSLuv$colors = function (_p4) {
	var _p5 = _p4;
	return A3(
		_Janiczek$distinct_colors$Internal$colors,
		function (hue) {
			return A4(_kuon$elm_hsluv$HSLuv$hsluva, hue, _p5.saturation * 100, _p5.lightness * 100, _p5.alpha);
		},
		_Janiczek$distinct_colors$DistinctColors_HSLuv$nextColor,
		_p5.numberOfColors);
};
var _Janiczek$distinct_colors$DistinctColors_HSLuv$Record = F4(
	function (a, b, c, d) {
		return {hue: a, saturation: b, lightness: c, alpha: d};
	});

var _elm_community$dict_extra$Dict_Extra$find = F2(
	function (predicate, dict) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, acc) {
					var _p0 = acc;
					if (_p0.ctor === 'Just') {
						return acc;
					} else {
						return A2(predicate, k, v) ? _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: k, _1: v}) : _elm_lang$core$Maybe$Nothing;
					}
				}),
			_elm_lang$core$Maybe$Nothing,
			dict);
	});
var _elm_community$dict_extra$Dict_Extra$invert = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldl,
		F3(
			function (k, v, acc) {
				return A3(_elm_lang$core$Dict$insert, v, k, acc);
			}),
		_elm_lang$core$Dict$empty,
		dict);
};
var _elm_community$dict_extra$Dict_Extra$filterMap = F2(
	function (f, dict) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, acc) {
					var _p1 = A2(f, k, v);
					if (_p1.ctor === 'Just') {
						return A3(_elm_lang$core$Dict$insert, k, _p1._0, acc);
					} else {
						return acc;
					}
				}),
			_elm_lang$core$Dict$empty,
			dict);
	});
var _elm_community$dict_extra$Dict_Extra$mapKeys = F2(
	function (keyMapper, dict) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, acc) {
					return A3(
						_elm_lang$core$Dict$insert,
						keyMapper(k),
						v,
						acc);
				}),
			_elm_lang$core$Dict$empty,
			dict);
	});
var _elm_community$dict_extra$Dict_Extra$keepOnly = F2(
	function (set, dict) {
		return A3(
			_elm_lang$core$Set$foldl,
			F2(
				function (k, acc) {
					return A2(
						_elm_lang$core$Maybe$withDefault,
						acc,
						A2(
							_elm_lang$core$Maybe$map,
							function (v) {
								return A3(_elm_lang$core$Dict$insert, k, v, acc);
							},
							A2(_elm_lang$core$Dict$get, k, dict)));
				}),
			_elm_lang$core$Dict$empty,
			set);
	});
var _elm_community$dict_extra$Dict_Extra$insertDedupe = F4(
	function (combine, key, value, dict) {
		var $with = function (mbValue) {
			var _p2 = mbValue;
			if (_p2.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					A2(combine, _p2._0, value));
			} else {
				return _elm_lang$core$Maybe$Just(value);
			}
		};
		return A3(_elm_lang$core$Dict$update, key, $with, dict);
	});
var _elm_community$dict_extra$Dict_Extra$removeMany = F2(
	function (set, dict) {
		return A3(_elm_lang$core$Set$foldl, _elm_lang$core$Dict$remove, dict, set);
	});
var _elm_community$dict_extra$Dict_Extra$removeWhen = F2(
	function (pred, dict) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, v) {
					return !A2(pred, k, v);
				}),
			dict);
	});
var _elm_community$dict_extra$Dict_Extra$frequencies = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (el, counter) {
				return function (count) {
					return A3(_elm_lang$core$Dict$insert, el, count, counter);
				}(
					function (count) {
						return count + 1;
					}(
						A2(
							_elm_lang$core$Maybe$withDefault,
							0,
							A2(_elm_lang$core$Dict$get, el, counter))));
			}),
		_elm_lang$core$Dict$empty,
		list);
};
var _elm_community$dict_extra$Dict_Extra$fromListDedupeBy = F3(
	function (combine, keyfn, xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, acc) {
					return A4(
						_elm_community$dict_extra$Dict_Extra$insertDedupe,
						combine,
						keyfn(x),
						x,
						acc);
				}),
			_elm_lang$core$Dict$empty,
			xs);
	});
var _elm_community$dict_extra$Dict_Extra$fromListDedupe = F2(
	function (combine, xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p3, acc) {
					var _p4 = _p3;
					return A4(_elm_community$dict_extra$Dict_Extra$insertDedupe, combine, _p4._0, _p4._1, acc);
				}),
			_elm_lang$core$Dict$empty,
			xs);
	});
var _elm_community$dict_extra$Dict_Extra$fromListBy = F2(
	function (keyfn, xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, acc) {
					return A3(
						_elm_lang$core$Dict$insert,
						keyfn(x),
						x,
						acc);
				}),
			_elm_lang$core$Dict$empty,
			xs);
	});
var _elm_community$dict_extra$Dict_Extra$filterGroupBy = F2(
	function (keyfn, list) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					var _p5 = keyfn(x);
					if (_p5.ctor === 'Just') {
						return A3(
							_elm_lang$core$Dict$update,
							_p5._0,
							function (_p6) {
								return _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$Maybe$withDefault,
										{
											ctor: '::',
											_0: x,
											_1: {ctor: '[]'}
										},
										A2(
											_elm_lang$core$Maybe$map,
											F2(
												function (x, y) {
													return {ctor: '::', _0: x, _1: y};
												})(x),
											_p6)));
							},
							acc);
					} else {
						return acc;
					}
				}),
			_elm_lang$core$Dict$empty,
			list);
	});
var _elm_community$dict_extra$Dict_Extra$groupBy = F2(
	function (keyfn, list) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A3(
						_elm_lang$core$Dict$update,
						keyfn(x),
						function (_p7) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Maybe$withDefault,
									{
										ctor: '::',
										_0: x,
										_1: {ctor: '[]'}
									},
									A2(
										_elm_lang$core$Maybe$map,
										F2(
											function (x, y) {
												return {ctor: '::', _0: x, _1: y};
											})(x),
										_p7)));
						},
						acc);
				}),
			_elm_lang$core$Dict$empty,
			list);
	});

var _elm_lang$lazy$Native_Lazy = function() {

function memoize(thunk)
{
    var value;
    var isForced = false;
    return function(tuple0) {
        if (!isForced) {
            value = thunk(tuple0);
            isForced = true;
        }
        return value;
    };
}

return {
    memoize: memoize
};

}();

var _elm_lang$lazy$Lazy$force = function (_p0) {
	var _p1 = _p0;
	return _p1._0(
		{ctor: '_Tuple0'});
};
var _elm_lang$lazy$Lazy$Lazy = function (a) {
	return {ctor: 'Lazy', _0: a};
};
var _elm_lang$lazy$Lazy$lazy = function (thunk) {
	return _elm_lang$lazy$Lazy$Lazy(
		_elm_lang$lazy$Native_Lazy.memoize(thunk));
};
var _elm_lang$lazy$Lazy$map = F2(
	function (f, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p2) {
				var _p3 = _p2;
				return f(
					_elm_lang$lazy$Lazy$force(a));
			});
	});
var _elm_lang$lazy$Lazy$map2 = F3(
	function (f, a, b) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p4) {
				var _p5 = _p4;
				return A2(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b));
			});
	});
var _elm_lang$lazy$Lazy$map3 = F4(
	function (f, a, b, c) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p6) {
				var _p7 = _p6;
				return A3(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c));
			});
	});
var _elm_lang$lazy$Lazy$map4 = F5(
	function (f, a, b, c, d) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p8) {
				var _p9 = _p8;
				return A4(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d));
			});
	});
var _elm_lang$lazy$Lazy$map5 = F6(
	function (f, a, b, c, d, e) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p10) {
				var _p11 = _p10;
				return A5(
					f,
					_elm_lang$lazy$Lazy$force(a),
					_elm_lang$lazy$Lazy$force(b),
					_elm_lang$lazy$Lazy$force(c),
					_elm_lang$lazy$Lazy$force(d),
					_elm_lang$lazy$Lazy$force(e));
			});
	});
var _elm_lang$lazy$Lazy$apply = F2(
	function (f, x) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p12) {
				var _p13 = _p12;
				return A2(
					_elm_lang$lazy$Lazy$force,
					f,
					_elm_lang$lazy$Lazy$force(x));
			});
	});
var _elm_lang$lazy$Lazy$andThen = F2(
	function (callback, a) {
		return _elm_lang$lazy$Lazy$lazy(
			function (_p14) {
				var _p15 = _p14;
				return _elm_lang$lazy$Lazy$force(
					callback(
						_elm_lang$lazy$Lazy$force(a)));
			});
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_community$parser_combinators$Combine$app = function (p) {
	var _p0 = p;
	if (_p0.ctor === 'Parser') {
		return _p0._0;
	} else {
		return _elm_lang$lazy$Lazy$force(_p0._0);
	}
};
var _elm_community$parser_combinators$Combine$InputStream = F3(
	function (a, b, c) {
		return {data: a, input: b, position: c};
	});
var _elm_community$parser_combinators$Combine$initStream = function (s) {
	return A3(_elm_community$parser_combinators$Combine$InputStream, s, s, 0);
};
var _elm_community$parser_combinators$Combine$runParser = F3(
	function (p, st, s) {
		var _p1 = A3(
			_elm_community$parser_combinators$Combine$app,
			p,
			st,
			_elm_community$parser_combinators$Combine$initStream(s));
		if (_p1._2.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		} else {
			return _elm_lang$core$Result$Err(
				{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
		}
	});
var _elm_community$parser_combinators$Combine$parse = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine$runParser,
		p,
		{ctor: '_Tuple0'});
};
var _elm_community$parser_combinators$Combine$ParseLocation = F3(
	function (a, b, c) {
		return {source: a, line: b, column: c};
	});
var _elm_community$parser_combinators$Combine$currentLocation = function (stream) {
	var find = F3(
		function (position, currentLine, lines) {
			find:
			while (true) {
				var _p2 = lines;
				if (_p2.ctor === '[]') {
					return A3(_elm_community$parser_combinators$Combine$ParseLocation, '', currentLine, position);
				} else {
					var _p3 = _p2._0;
					var length = _elm_lang$core$String$length(_p3);
					var lengthPlusNL = length + 1;
					if (_elm_lang$core$Native_Utils.eq(position, length)) {
						return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p3, currentLine, position);
					} else {
						if (_elm_lang$core$Native_Utils.cmp(position, length) > 0) {
							var _v3 = position - lengthPlusNL,
								_v4 = currentLine + 1,
								_v5 = _p2._1;
							position = _v3;
							currentLine = _v4;
							lines = _v5;
							continue find;
						} else {
							return A3(_elm_community$parser_combinators$Combine$ParseLocation, _p3, currentLine, position);
						}
					}
				}
			}
		});
	return A3(
		find,
		stream.position,
		0,
		A2(_elm_lang$core$String$split, '\n', stream.data));
};
var _elm_community$parser_combinators$Combine$currentSourceLine = function (_p4) {
	return function (_) {
		return _.source;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p4));
};
var _elm_community$parser_combinators$Combine$currentLine = function (_p5) {
	return function (_) {
		return _.line;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p5));
};
var _elm_community$parser_combinators$Combine$currentColumn = function (_p6) {
	return function (_) {
		return _.column;
	}(
		_elm_community$parser_combinators$Combine$currentLocation(_p6));
};
var _elm_community$parser_combinators$Combine$RecursiveParser = function (a) {
	return {ctor: 'RecursiveParser', _0: a};
};
var _elm_community$parser_combinators$Combine$lazy = function (t) {
	return _elm_community$parser_combinators$Combine$RecursiveParser(
		_elm_lang$lazy$Lazy$lazy(
			function (_p7) {
				var _p8 = _p7;
				return _elm_community$parser_combinators$Combine$app(
					t(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_community$parser_combinators$Combine$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_community$parser_combinators$Combine$primitive = _elm_community$parser_combinators$Combine$Parser;
var _elm_community$parser_combinators$Combine$bimap = F3(
	function (fok, ferr, p) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p9 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
					if (_p9._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Ok(
								fok(_p9._2._0))
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p9._0,
							_1: _p9._1,
							_2: _elm_lang$core$Result$Err(
								ferr(_p9._2._0))
						};
					}
				}));
	});
var _elm_community$parser_combinators$Combine$map = F2(
	function (f, p) {
		return A3(_elm_community$parser_combinators$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<$>'] = _elm_community$parser_combinators$Combine$map;
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<$'] = function (res) {
	return _elm_community$parser_combinators$Combine$map(
		_elm_lang$core$Basics$always(res));
};
var _elm_community$parser_combinators$Combine$skip = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		p);
};
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['$>'] = _elm_lang$core$Basics$flip(
	F2(
		function (x, y) {
			return A2(_elm_community$parser_combinators$Combine_ops['<$'], x, y);
		}));
var _elm_community$parser_combinators$Combine$mapError = _elm_community$parser_combinators$Combine$bimap(_elm_lang$core$Basics$identity);
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<?>'] = F2(
	function (p, m) {
		return A2(
			_elm_community$parser_combinators$Combine$mapError,
			_elm_lang$core$Basics$always(
				{
					ctor: '::',
					_0: m,
					_1: {ctor: '[]'}
				}),
			p);
	});
var _elm_community$parser_combinators$Combine$withState = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(state),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withLocation = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentLocation(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withLine = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentLine(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$withColumn = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					f(
						_elm_community$parser_combinators$Combine$currentColumn(stream)),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$andThen = F2(
	function (f, p) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p10 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
					if (_p10._2.ctor === 'Ok') {
						return A3(
							_elm_community$parser_combinators$Combine$app,
							f(_p10._2._0),
							_p10._0,
							_p10._1);
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p10._0,
							_1: _p10._1,
							_2: _elm_lang$core$Result$Err(_p10._2._0)
						};
					}
				}));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['>>='] = _elm_lang$core$Basics$flip(_elm_community$parser_combinators$Combine$andThen);
var _elm_community$parser_combinators$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['>>='],
			lp,
			A2(_elm_lang$core$Basics$flip, _elm_community$parser_combinators$Combine$map, rp));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<*>'] = _elm_lang$core$Basics$flip(_elm_community$parser_combinators$Combine$andMap);
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<*'] = F2(
	function (lp, rp) {
		return A2(
			_elm_community$parser_combinators$Combine$andMap,
			rp,
			A2(_elm_community$parser_combinators$Combine$map, _elm_lang$core$Basics$always, lp));
	});
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['*>'] = F2(
	function (lp, rp) {
		return A2(
			_elm_community$parser_combinators$Combine$andMap,
			rp,
			A2(
				_elm_community$parser_combinators$Combine$map,
				_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
				lp));
	});
var _elm_community$parser_combinators$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(_elm_community$parser_combinators$Combine_ops['*>'], lp, p),
			rp);
	});
var _elm_community$parser_combinators$Combine$sequence = function (parsers) {
	var accumulate = F4(
		function (acc, ps, state, stream) {
			accumulate:
			while (true) {
				var _p11 = ps;
				if (_p11.ctor === '[]') {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$List$reverse(acc))
					};
				} else {
					var _p12 = A3(_elm_community$parser_combinators$Combine$app, _p11._0, state, stream);
					if (_p12._2.ctor === 'Ok') {
						var _v11 = {ctor: '::', _0: _p12._2._0, _1: acc},
							_v12 = _p11._1,
							_v13 = _p12._0,
							_v14 = _p12._1;
						acc = _v11;
						ps = _v12;
						state = _v13;
						stream = _v14;
						continue accumulate;
					} else {
						return {
							ctor: '_Tuple3',
							_0: _p12._0,
							_1: _p12._1,
							_2: _elm_lang$core$Result$Err(_p12._2._0)
						};
					}
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A4(
					accumulate,
					{ctor: '[]'},
					parsers,
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$fail = function (m) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Err(
						{
							ctor: '::',
							_0: m,
							_1: {ctor: '[]'}
						})
				};
			}));
};
var _elm_community$parser_combinators$Combine$emptyErr = _elm_community$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{ctor: '[]'})
			};
		}));
var _elm_community$parser_combinators$Combine$succeed = function (res) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$putState = function (state) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (_p13, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					_elm_community$parser_combinators$Combine$succeed(
						{ctor: '_Tuple0'}),
					state,
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$modifyState = function (f) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				return A3(
					_elm_community$parser_combinators$Combine$app,
					_elm_community$parser_combinators$Combine$succeed(
						{ctor: '_Tuple0'}),
					f(state),
					stream);
			}));
};
var _elm_community$parser_combinators$Combine$count = F2(
	function (n, p) {
		var accumulate = F2(
			function (x, acc) {
				return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _elm_community$parser_combinators$Combine$succeed(
					_elm_lang$core$List$reverse(acc)) : A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (res) {
						return A2(
							accumulate,
							x - 1,
							{ctor: '::', _0: res, _1: acc});
					},
					p);
			});
		return A2(
			accumulate,
			n,
			{ctor: '[]'});
	});
var _elm_community$parser_combinators$Combine$string = function (s) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				if (A2(_elm_lang$core$String$startsWith, s, stream.input)) {
					var len = _elm_lang$core$String$length(s);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(s)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected ',
									_elm_lang$core$Basics$toString(s)),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$parens = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('('),
	_elm_community$parser_combinators$Combine$string(')'));
var _elm_community$parser_combinators$Combine$braces = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('{'),
	_elm_community$parser_combinators$Combine$string('}'));
var _elm_community$parser_combinators$Combine$brackets = A2(
	_elm_community$parser_combinators$Combine$between,
	_elm_community$parser_combinators$Combine$string('['),
	_elm_community$parser_combinators$Combine$string(']'));
var _elm_community$parser_combinators$Combine$regex = function (pat) {
	var pattern = A2(_elm_lang$core$String$startsWith, '^', pat) ? pat : A2(_elm_lang$core$Basics_ops['++'], '^', pat);
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p14 = A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_elm_lang$core$Regex$regex(pattern),
					stream.input);
				if ((_p14.ctor === '::') && (_p14._1.ctor === '[]')) {
					var _p15 = _p14._0;
					var len = _elm_lang$core$String$length(_p15.match);
					var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
					var pos = stream.position + len;
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: rem, position: pos}),
						_2: _elm_lang$core$Result$Ok(_p15.match)
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'expected input matching Regexp /',
									A2(_elm_lang$core$Basics_ops['++'], pattern, '/')),
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$whitespace = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine$regex('[ \t\r\n]*'),
	'whitespace');
var _elm_community$parser_combinators$Combine$whitespace1 = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine$regex('[ \t\r\n]+'),
	'whitespace');
var _elm_community$parser_combinators$Combine$while = function (pred) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p16 = _elm_lang$core$String$uncons(stream.input);
				if (_p16.ctor === 'Just') {
					var _p17 = _p16._0._0;
					if (pred(_p17)) {
						var pos = stream.position + 1;
						var c = A2(_elm_lang$core$String$cons, _p17, '');
						var _v17 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
							_v18 = state,
							_v19 = _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p16._0._1, position: pos});
						acc = _v17;
						state = _v18;
						stream = _v19;
						continue accumulate;
					} else {
						return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
					}
				} else {
					return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p18 = A3(accumulate, '', state, stream);
				var rstate = _p18._0;
				var rstream = _p18._1;
				var res = _p18._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$end = _elm_community$parser_combinators$Combine$Parser(
	F2(
		function (state, stream) {
			return _elm_lang$core$Native_Utils.eq(stream.input, '') ? {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Ok(
					{ctor: '_Tuple0'})
			} : {
				ctor: '_Tuple3',
				_0: state,
				_1: stream,
				_2: _elm_lang$core$Result$Err(
					{
						ctor: '::',
						_0: 'expected end of input',
						_1: {ctor: '[]'}
					})
			};
		}));
var _elm_community$parser_combinators$Combine$lookAhead = function (p) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p19 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p19.ctor === '_Tuple3') && (_p19._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p19._0,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_p19._2._0)
					};
				} else {
					return _p19;
				}
			}));
};
var _elm_community$parser_combinators$Combine$or = F2(
	function (lp, rp) {
		return _elm_community$parser_combinators$Combine$Parser(
			F2(
				function (state, stream) {
					var _p20 = A3(_elm_community$parser_combinators$Combine$app, lp, state, stream);
					if (_p20._2.ctor === 'Ok') {
						return _p20;
					} else {
						var _p21 = A3(_elm_community$parser_combinators$Combine$app, rp, state, stream);
						if (_p21._2.ctor === 'Ok') {
							return _p21;
						} else {
							return {
								ctor: '_Tuple3',
								_0: state,
								_1: stream,
								_2: _elm_lang$core$Result$Err(
									A2(_elm_lang$core$Basics_ops['++'], _p20._2._0, _p21._2._0))
							};
						}
					}
				}));
	});
var _elm_community$parser_combinators$Combine$choice = function (xs) {
	return A3(_elm_lang$core$List$foldr, _elm_community$parser_combinators$Combine$or, _elm_community$parser_combinators$Combine$emptyErr, xs);
};
var _elm_community$parser_combinators$Combine_ops = _elm_community$parser_combinators$Combine_ops || {};
_elm_community$parser_combinators$Combine_ops['<|>'] = _elm_community$parser_combinators$Combine$or;
var _elm_community$parser_combinators$Combine$optional = F2(
	function (res, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			p,
			_elm_community$parser_combinators$Combine$succeed(res));
	});
var _elm_community$parser_combinators$Combine$chainl = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (f) {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (y) {
								return accumulate(
									A2(f, x, y));
							},
							p);
					},
					op),
				_elm_community$parser_combinators$Combine$succeed(x));
		};
		return A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p);
	});
var _elm_community$parser_combinators$Combine$chainr = F2(
	function (op, p) {
		var accumulate = function (x) {
			return A2(
				_elm_community$parser_combinators$Combine_ops['<|>'],
				A2(
					_elm_community$parser_combinators$Combine$andThen,
					function (f) {
						return A2(
							_elm_community$parser_combinators$Combine$andThen,
							function (y) {
								return _elm_community$parser_combinators$Combine$succeed(
									A2(f, x, y));
							},
							A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p));
					},
					op),
				_elm_community$parser_combinators$Combine$succeed(x));
		};
		return A2(_elm_community$parser_combinators$Combine$andThen, accumulate, p);
	});
var _elm_community$parser_combinators$Combine$maybe = function (p) {
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p22 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p22.ctor === '_Tuple3') && (_p22._2.ctor === 'Ok')) {
					return {
						ctor: '_Tuple3',
						_0: _p22._0,
						_1: _p22._1,
						_2: _elm_lang$core$Result$Ok(
							_elm_lang$core$Maybe$Just(_p22._2._0))
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing)
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _p23 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
				if ((_p23.ctor === '_Tuple3') && (_p23._2.ctor === 'Ok')) {
					var _p25 = _p23._1;
					var _p24 = _p23._0;
					if (_elm_lang$core$Native_Utils.eq(stream, _p25)) {
						return {
							ctor: '_Tuple3',
							_0: _p24,
							_1: _p25,
							_2: _elm_lang$core$List$reverse(acc)
						};
					} else {
						var _v25 = {ctor: '::', _0: _p23._2._0, _1: acc},
							_v26 = _p24,
							_v27 = _p25;
						acc = _v25;
						state = _v26;
						stream = _v27;
						continue accumulate;
					}
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$List$reverse(acc)
					};
				}
			}
		});
	return _elm_community$parser_combinators$Combine$Parser(
		F2(
			function (state, stream) {
				var _p26 = A3(
					accumulate,
					{ctor: '[]'},
					state,
					stream);
				var rstate = _p26._0;
				var rstream = _p26._1;
				var res = _p26._2;
				return {
					ctor: '_Tuple3',
					_0: rstate,
					_1: rstream,
					_2: _elm_lang$core$Result$Ok(res)
				};
			}));
};
var _elm_community$parser_combinators$Combine$many1 = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			p),
		_elm_community$parser_combinators$Combine$many(p));
};
var _elm_community$parser_combinators$Combine$skipMany1 = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_elm_community$parser_combinators$Combine$many1(
			_elm_community$parser_combinators$Combine$skip(p)));
};
var _elm_community$parser_combinators$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				p),
			_elm_community$parser_combinators$Combine$many(
				A2(_elm_community$parser_combinators$Combine_ops['*>'], sep, p)));
	});
var _elm_community$parser_combinators$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(_elm_community$parser_combinators$Combine$sepBy1, sep, p),
			_elm_community$parser_combinators$Combine$succeed(
				{ctor: '[]'}));
	});
var _elm_community$parser_combinators$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<*'],
			A2(_elm_community$parser_combinators$Combine$sepBy1, sep, p),
			_elm_community$parser_combinators$Combine$maybe(sep));
	});
var _elm_community$parser_combinators$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			_elm_community$parser_combinators$Combine_ops['<|>'],
			A2(_elm_community$parser_combinators$Combine$sepEndBy1, sep, p),
			_elm_community$parser_combinators$Combine$succeed(
				{ctor: '[]'}));
	});
var _elm_community$parser_combinators$Combine$skipMany = function (p) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$'],
		{ctor: '_Tuple0'},
		_elm_community$parser_combinators$Combine$many(
			_elm_community$parser_combinators$Combine$skip(p)));
};
var _elm_community$parser_combinators$Combine$manyTill = F2(
	function (p, end) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p27 = A3(_elm_community$parser_combinators$Combine$app, end, state, stream);
					if (_p27._2.ctor === 'Ok') {
						return {
							ctor: '_Tuple3',
							_0: _p27._0,
							_1: _p27._1,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc))
						};
					} else {
						var _p28 = A3(_elm_community$parser_combinators$Combine$app, p, state, stream);
						if ((_p28.ctor === '_Tuple3') && (_p28._2.ctor === 'Ok')) {
							var _v30 = {ctor: '::', _0: _p28._2._0, _1: acc},
								_v31 = _p28._0,
								_v32 = _p28._1;
							acc = _v30;
							state = _v31;
							stream = _v32;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p27._0,
								_1: _p27._1,
								_2: _elm_lang$core$Result$Err(_p27._2._0)
							};
						}
					}
				}
			});
		return _elm_community$parser_combinators$Combine$Parser(
			accumulate(
				{ctor: '[]'}));
	});

var _elm_community$parser_combinators$Combine_Char$crlf = A2(
	_elm_community$parser_combinators$Combine_ops['<$'],
	_elm_lang$core$Native_Utils.chr('\n'),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine$regex('\r\n'),
		'expected crlf'));
var _elm_community$parser_combinators$Combine_Char$satisfy = function (pred) {
	return _elm_community$parser_combinators$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _p0 = _elm_lang$core$String$uncons(stream.input);
				if (_p0.ctor === 'Just') {
					var _p1 = _p0._0._0;
					return pred(_p1) ? {
						ctor: '_Tuple3',
						_0: state,
						_1: _elm_lang$core$Native_Utils.update(
							stream,
							{input: _p0._0._1, position: stream.position + 1}),
						_2: _elm_lang$core$Result$Ok(_p1)
					} : {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: message,
								_1: {ctor: '[]'}
							})
					};
				}
			}));
};
var _elm_community$parser_combinators$Combine_Char$char = function (c) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(c)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected ',
			_elm_lang$core$Basics$toString(c)));
};
var _elm_community$parser_combinators$Combine_Char$anyChar = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		_elm_lang$core$Basics$always(true)),
	'expected any character');
var _elm_community$parser_combinators$Combine_Char$oneOf = function (cs) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected one of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _elm_community$parser_combinators$Combine_Char$noneOf = function (cs) {
	return A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		_elm_community$parser_combinators$Combine_Char$satisfy(
			function (_p2) {
				return !A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2);
			}),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'expected none of ',
			_elm_lang$core$Basics$toString(cs)));
};
var _elm_community$parser_combinators$Combine_Char$space = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr(' '))),
	'expected space');
var _elm_community$parser_combinators$Combine_Char$tab = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\t'))),
	'expected tab');
var _elm_community$parser_combinators$Combine_Char$newline = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(
			_elm_lang$core$Native_Utils.chr('\n'))),
	'expected newline');
var _elm_community$parser_combinators$Combine_Char$eol = A2(_elm_community$parser_combinators$Combine_ops['<|>'], _elm_community$parser_combinators$Combine_Char$newline, _elm_community$parser_combinators$Combine_Char$crlf);
var _elm_community$parser_combinators$Combine_Char$lower = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
	'expected a lowercase character');
var _elm_community$parser_combinators$Combine_Char$upper = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
	'expected an uppercase character');
var _elm_community$parser_combinators$Combine_Char$digit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
	'expected a digit');
var _elm_community$parser_combinators$Combine_Char$octDigit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
	'expected an octal digit');
var _elm_community$parser_combinators$Combine_Char$hexDigit = A2(
	_elm_community$parser_combinators$Combine_ops['<?>'],
	_elm_community$parser_combinators$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
	'expected a hexadecimal digit');

var _elm_community$parser_combinators$Combine_Num$digit = function () {
	var toDigit = function (c) {
		return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
			_elm_lang$core$Native_Utils.chr('0'));
	};
	return A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		toDigit,
		A2(_elm_community$parser_combinators$Combine_ops['<?>'], _elm_community$parser_combinators$Combine_Char$digit, 'expected a digit'));
}();
var _elm_community$parser_combinators$Combine_Num$sign = A2(
	_elm_community$parser_combinators$Combine$optional,
	1,
	_elm_community$parser_combinators$Combine$choice(
		{
			ctor: '::',
			_0: A2(
				_elm_community$parser_combinators$Combine_ops['<$'],
				1,
				_elm_community$parser_combinators$Combine$string('+')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_community$parser_combinators$Combine_ops['<$'],
					-1,
					_elm_community$parser_combinators$Combine$string('-')),
				_1: {ctor: '[]'}
			}
		}));
var _elm_community$parser_combinators$Combine_Num$unwrap = F2(
	function (f, s) {
		var _p0 = f(s);
		if (_p0.ctor === 'Ok') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Combine.Num',
				{
					start: {line: 23, column: 5},
					end: {line: 28, column: 83}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'impossible state in Combine.Num.unwrap: ',
					_elm_lang$core$Basics$toString(_p0._0)));
		}
	});
var _elm_community$parser_combinators$Combine_Num$toInt = _elm_community$parser_combinators$Combine_Num$unwrap(_elm_lang$core$String$toInt);
var _elm_community$parser_combinators$Combine_Num$int = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		F2(
			function (x, y) {
				return x * y;
			}),
		_elm_community$parser_combinators$Combine_Num$sign),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_community$parser_combinators$Combine_Num$toInt,
			_elm_community$parser_combinators$Combine$regex('(0|[1-9][0-9]*)')),
		'expected an integer'));
var _elm_community$parser_combinators$Combine_Num$toFloat = _elm_community$parser_combinators$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
var _elm_community$parser_combinators$Combine_Num$float = A2(
	_elm_community$parser_combinators$Combine_ops['<*>'],
	A2(
		_elm_community$parser_combinators$Combine_ops['<$>'],
		function (_p2) {
			return F2(
				function (x, y) {
					return x * y;
				})(
				_elm_lang$core$Basics$toFloat(_p2));
		},
		_elm_community$parser_combinators$Combine_Num$sign),
	A2(
		_elm_community$parser_combinators$Combine_ops['<?>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<$>'],
			_elm_community$parser_combinators$Combine_Num$toFloat,
			_elm_community$parser_combinators$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)')),
		'expected a float'));

var _elm_community$elm_time$Time_Internal$digitsInRange = F3(
	function (digitsToParse, lo, hi) {
		var failure = _elm_community$parser_combinators$Combine$fail(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'expected ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(digitsToParse),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' digits in the range [',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(lo),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(hi),
									']')))))));
		return A2(
			_elm_community$parser_combinators$Combine$andThen,
			function (digits) {
				var _p0 = _elm_lang$core$String$toInt(digits);
				if (_p0.ctor === 'Ok') {
					var _p1 = _p0._0;
					return ((_elm_lang$core$Native_Utils.cmp(_p1, lo) > -1) && (_elm_lang$core$Native_Utils.cmp(_p1, hi) < 1)) ? _elm_community$parser_combinators$Combine$succeed(_p1) : failure;
				} else {
					return failure;
				}
			},
			_elm_community$parser_combinators$Combine$regex(
				A2(_elm_lang$core$String$repeat, digitsToParse, '\\d')));
	});
var _elm_community$elm_time$Time_Internal$paddedInt = A2(
	_elm_community$parser_combinators$Combine_ops['*>'],
	A2(
		_elm_community$parser_combinators$Combine$optional,
		'',
		_elm_community$parser_combinators$Combine$string('0')),
	_elm_community$parser_combinators$Combine_Num$int);
var _elm_community$elm_time$Time_Internal$intRange = F2(
	function (lo, hi) {
		var validate = function (n) {
			return ((_elm_lang$core$Native_Utils.cmp(n, lo) > -1) && (_elm_lang$core$Native_Utils.cmp(n, hi) < 1)) ? _elm_community$parser_combinators$Combine$succeed(n) : _elm_community$parser_combinators$Combine$fail(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'expected an integer in the range [',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(lo),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(hi),
								']')))));
		};
		return A2(_elm_community$parser_combinators$Combine_ops['>>='], _elm_community$elm_time$Time_Internal$paddedInt, validate);
	});
var _elm_community$elm_time$Time_Internal$secondMs = 1000;
var _elm_community$elm_time$Time_Internal$minuteMs = 60000;
var _elm_community$elm_time$Time_Internal$hourMs = 3600000;
var _elm_community$elm_time$Time_Internal$dayMs = 86400000;
var _elm_community$elm_time$Time_Internal$padded3 = function (n) {
	return A3(
		_elm_lang$core$String$padLeft,
		3,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Basics$toString(n));
};
var _elm_community$elm_time$Time_Internal$padded = function (n) {
	return (_elm_lang$core$Native_Utils.cmp(n, 10) < 0) ? A2(
		_elm_lang$core$Basics_ops['++'],
		'0',
		_elm_lang$core$Basics$toString(n)) : _elm_lang$core$Basics$toString(n);
};
var _elm_community$elm_time$Time_Internal$zero = {year: 0, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0};
var _elm_community$elm_time$Time_Internal$offsetFromTimeData = function (_p2) {
	var _p3 = _p2;
	return (((A3(_elm_lang$core$Basics$clamp, 0, 23, _p3.hour) * _elm_community$elm_time$Time_Internal$hourMs) + (A3(_elm_lang$core$Basics$clamp, 0, 59, _p3.minute) * _elm_community$elm_time$Time_Internal$minuteMs)) + (A3(_elm_lang$core$Basics$clamp, 0, 59, _p3.second) * _elm_community$elm_time$Time_Internal$secondMs)) + A3(_elm_lang$core$Basics$clamp, 0, 999, _p3.millisecond);
};
var _elm_community$elm_time$Time_Internal$DateTimeData = F7(
	function (a, b, c, d, e, f, g) {
		return {year: a, month: b, day: c, hour: d, minute: e, second: f, millisecond: g};
	});

var _elm_community$elm_time$Time_Date$clampDay = function (day) {
	return A3(_elm_lang$core$Basics$clamp, 1, 31, day);
};
var _elm_community$elm_time$Time_Date$clampMonth = function (month) {
	return A3(_elm_lang$core$Basics$clamp, 1, 12, month);
};
var _elm_community$elm_time$Time_Date$daysFromYear = function (y) {
	return (_elm_lang$core$Native_Utils.cmp(y, 0) > 0) ? ((((366 + ((y - 1) * 365)) + (((y - 1) / 4) | 0)) - (((y - 1) / 100) | 0)) + (((y - 1) / 400) | 0)) : ((_elm_lang$core$Native_Utils.cmp(y, 0) < 0) ? ((((y * 365) + ((y / 4) | 0)) - ((y / 100) | 0)) + ((y / 400) | 0)) : 0);
};
var _elm_community$elm_time$Time_Date$yearFromDays = function (ds) {
	var y = (ds / 365) | 0;
	var d = _elm_community$elm_time$Time_Date$daysFromYear(y);
	return (_elm_lang$core$Native_Utils.cmp(ds, d) < 1) ? (y - 1) : y;
};
var _elm_community$elm_time$Time_Date$isLeapYear = function (y) {
	return _elm_lang$core$Native_Utils.eq(
		A2(_elm_lang$core$Basics_ops['%'], y, 400),
		0) || ((!_elm_lang$core$Native_Utils.eq(
		A2(_elm_lang$core$Basics_ops['%'], y, 100),
		0)) && _elm_lang$core$Native_Utils.eq(
		A2(_elm_lang$core$Basics_ops['%'], y, 4),
		0));
};
var _elm_community$elm_time$Time_Date$unsafeDaysInMonth = F2(
	function (y, m) {
		return _elm_lang$core$Native_Utils.eq(m, 1) ? 31 : ((_elm_lang$core$Native_Utils.eq(m, 2) && _elm_community$elm_time$Time_Date$isLeapYear(y)) ? 29 : (_elm_lang$core$Native_Utils.eq(m, 2) ? 28 : (_elm_lang$core$Native_Utils.eq(m, 3) ? 31 : (_elm_lang$core$Native_Utils.eq(m, 4) ? 30 : (_elm_lang$core$Native_Utils.eq(m, 5) ? 31 : (_elm_lang$core$Native_Utils.eq(m, 6) ? 30 : (_elm_lang$core$Native_Utils.eq(m, 7) ? 31 : (_elm_lang$core$Native_Utils.eq(m, 8) ? 31 : (_elm_lang$core$Native_Utils.eq(m, 9) ? 30 : (_elm_lang$core$Native_Utils.eq(m, 10) ? 31 : (_elm_lang$core$Native_Utils.eq(m, 11) ? 30 : (_elm_lang$core$Native_Utils.eq(m, 12) ? 31 : _elm_lang$core$Native_Utils.crash(
			'Time.Date',
			{
				start: {line: 343, column: 9},
				end: {line: 343, column: 20}
			})(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'invalid call to unsafeDaysInMonth: year=',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(y),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' month=',
						_elm_lang$core$Basics$toString(m)))))))))))))))));
	});
var _elm_community$elm_time$Time_Date$daysInMonth = F2(
	function (y, m) {
		return ((_elm_lang$core$Native_Utils.cmp(m, 1) > -1) && (_elm_lang$core$Native_Utils.cmp(m, 12) < 1)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_community$elm_time$Time_Date$unsafeDaysInMonth, y, m)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_community$elm_time$Time_Date$daysFromYearMonth = F2(
	function (year, month) {
		var go = F3(
			function (year, month, acc) {
				go:
				while (true) {
					if (_elm_lang$core$Native_Utils.eq(month, 0)) {
						return acc;
					} else {
						var _v0 = year,
							_v1 = month - 1,
							_v2 = acc + A2(_elm_community$elm_time$Time_Date$unsafeDaysInMonth, year, month);
						year = _v0;
						month = _v1;
						acc = _v2;
						continue go;
					}
				}
			});
		return A3(go, year, month - 1, 0);
	});
var _elm_community$elm_time$Time_Date$daysFromYearMonthDay = F3(
	function (year, month, day) {
		var dds = day - 1;
		var mds = A2(_elm_community$elm_time$Time_Date$daysFromYearMonth, year, month);
		var yds = _elm_community$elm_time$Time_Date$daysFromYear(year);
		return (yds + mds) + dds;
	});
var _elm_community$elm_time$Time_Date$isValidDate = F3(
	function (year, month, day) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			false,
			A2(
				_elm_lang$core$Maybe$map,
				function (days) {
					return (_elm_lang$core$Native_Utils.cmp(day, 1) > -1) && (_elm_lang$core$Native_Utils.cmp(day, days) < 1);
				},
				A2(_elm_community$elm_time$Time_Date$daysInMonth, year, month)));
	});
var _elm_community$elm_time$Time_Date$toTuple = function (_p0) {
	var _p1 = _p0;
	return {ctor: '_Tuple3', _0: _p1._0.year, _1: _p1._0.month, _2: _p1._0.day};
};
var _elm_community$elm_time$Time_Date$delta = F2(
	function (_p3, _p2) {
		var _p4 = _p3;
		var _p7 = _p4._0;
		var _p5 = _p2;
		var _p6 = _p5._0;
		return {
			years: _p7.year - _p6.year,
			months: ((_elm_lang$core$Basics$abs(_p7.year) * 12) + _p7.month) - ((_elm_lang$core$Basics$abs(_p6.year) * 12) + _p6.month),
			days: A3(_elm_community$elm_time$Time_Date$daysFromYearMonthDay, _p7.year, _p7.month, _p7.day) - A3(_elm_community$elm_time$Time_Date$daysFromYearMonthDay, _p6.year, _p6.month, _p6.day)
		};
	});
var _elm_community$elm_time$Time_Date$compare = F2(
	function (d1, d2) {
		return A2(
			_elm_lang$core$Basics$compare,
			_elm_community$elm_time$Time_Date$toTuple(d1),
			_elm_community$elm_time$Time_Date$toTuple(d2));
	});
var _elm_community$elm_time$Time_Date$day = function (_p8) {
	var _p9 = _p8;
	return _p9._0.day;
};
var _elm_community$elm_time$Time_Date$month = function (_p10) {
	var _p11 = _p10;
	return _p11._0.month;
};
var _elm_community$elm_time$Time_Date$year = function (_p12) {
	var _p13 = _p12;
	return _p13._0.year;
};
var _elm_community$elm_time$Time_Date$toISO8601 = function (d) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(
			_elm_community$elm_time$Time_Date$year(d)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'-',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_community$elm_time$Time_Internal$padded(
					_elm_community$elm_time$Time_Date$month(d)),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'-',
					_elm_community$elm_time$Time_Internal$padded(
						_elm_community$elm_time$Time_Date$day(d))))));
};
var _elm_community$elm_time$Time_Date$DateDelta = F3(
	function (a, b, c) {
		return {years: a, months: b, days: c};
	});
var _elm_community$elm_time$Time_Date$Date = function (a) {
	return {ctor: 'Date', _0: a};
};
var _elm_community$elm_time$Time_Date$firstValid = F3(
	function (year, month, day) {
		var _p14 = A3(_elm_community$elm_time$Time_Date$isValidDate, year, month, day) ? {ctor: '_Tuple3', _0: year, _1: month, _2: day} : (A3(_elm_community$elm_time$Time_Date$isValidDate, year, month, day - 1) ? {ctor: '_Tuple3', _0: year, _1: month, _2: day - 1} : (A3(_elm_community$elm_time$Time_Date$isValidDate, year, month, day - 2) ? {ctor: '_Tuple3', _0: year, _1: month, _2: day - 2} : {ctor: '_Tuple3', _0: year, _1: month, _2: day - 3}));
		var y = _p14._0;
		var m = _p14._1;
		var d = _p14._2;
		return _elm_community$elm_time$Time_Date$Date(
			{year: y, month: m, day: d});
	});
var _elm_community$elm_time$Time_Date$date = F3(
	function (year, month, day) {
		return A3(
			_elm_community$elm_time$Time_Date$firstValid,
			year,
			_elm_community$elm_time$Time_Date$clampMonth(month),
			_elm_community$elm_time$Time_Date$clampDay(day));
	});
var _elm_community$elm_time$Time_Date$addMonths = F2(
	function (months, _p15) {
		var _p16 = _p15;
		var ms = (((_p16._0.year * 12) + _p16._0.month) - 1) + months;
		var yo = (_elm_lang$core$Native_Utils.cmp(ms, 0) < 0) ? -1 : 0;
		return A3(
			_elm_community$elm_time$Time_Date$date,
			(((ms - yo) / 12) | 0) + yo,
			A2(_elm_lang$core$Basics_ops['%'], ms, 12) + 1,
			_p16._0.day);
	});
var _elm_community$elm_time$Time_Date$fromTuple = function (_p17) {
	var _p18 = _p17;
	return A3(_elm_community$elm_time$Time_Date$date, _p18._0, _p18._1, _p18._2);
};
var _elm_community$elm_time$Time_Date$fromISO8601 = function (input) {
	var convert = function (_p19) {
		var _p20 = _p19;
		var _p23 = _p20._0;
		var _p22 = _p20._1;
		var _p21 = _p20._2;
		return A3(_elm_community$elm_time$Time_Date$isValidDate, _p23, _p22, _p21) ? _elm_community$parser_combinators$Combine$succeed(
			A3(_elm_community$elm_time$Time_Date$date, _p23, _p22, _p21)) : _elm_community$parser_combinators$Combine$fail('invalid date');
	};
	var dateTuple = A2(
		_elm_community$parser_combinators$Combine_ops['<*>'],
		A2(
			_elm_community$parser_combinators$Combine_ops['<*>'],
			A2(
				_elm_community$parser_combinators$Combine_ops['<$>'],
				F3(
					function (v0, v1, v2) {
						return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
					}),
				_elm_community$parser_combinators$Combine_Num$int),
			A2(
				_elm_community$parser_combinators$Combine_ops['*>'],
				_elm_community$parser_combinators$Combine$string('-'),
				A2(_elm_community$elm_time$Time_Internal$intRange, 1, 12))),
		A2(
			_elm_community$parser_combinators$Combine_ops['*>'],
			_elm_community$parser_combinators$Combine$string('-'),
			A2(_elm_community$elm_time$Time_Internal$intRange, 1, 31)));
	var _p24 = A2(
		_elm_community$parser_combinators$Combine$parse,
		A2(_elm_community$parser_combinators$Combine_ops['>>='], dateTuple, convert),
		input);
	if (_p24.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(_p24._0._2);
	} else {
		var messages = A2(_elm_lang$core$String$join, ' or ', _p24._0._2);
		return _elm_lang$core$Result$Err(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Errors encountered at position ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p24._0._1.position),
					A2(_elm_lang$core$Basics_ops['++'], ': ', messages))));
	}
};
var _elm_community$elm_time$Time_Date$setYear = F2(
	function (year, _p25) {
		var _p26 = _p25;
		return A3(_elm_community$elm_time$Time_Date$firstValid, year, _p26._0.month, _p26._0.day);
	});
var _elm_community$elm_time$Time_Date$setMonth = F2(
	function (month, _p27) {
		var _p28 = _p27;
		return A3(
			_elm_community$elm_time$Time_Date$firstValid,
			_p28._0.year,
			_elm_community$elm_time$Time_Date$clampMonth(month),
			_p28._0.day);
	});
var _elm_community$elm_time$Time_Date$setDay = F2(
	function (day, _p29) {
		var _p30 = _p29;
		return A3(
			_elm_community$elm_time$Time_Date$firstValid,
			_p30._0.year,
			_p30._0.month,
			_elm_community$elm_time$Time_Date$clampDay(day));
	});
var _elm_community$elm_time$Time_Date$addYears = F2(
	function (years, _p31) {
		var _p32 = _p31;
		return A3(_elm_community$elm_time$Time_Date$firstValid, _p32._0.year + years, _p32._0.month, _p32._0.day);
	});
var _elm_community$elm_time$Time_Date$dateFromDays = function (ds) {
	var d400 = _elm_community$elm_time$Time_Date$daysFromYear(400);
	var y400 = (ds / d400) | 0;
	var d = A2(_elm_lang$core$Basics$rem, ds, d400);
	var year = _elm_community$elm_time$Time_Date$yearFromDays(d + 1);
	var leap = _elm_community$elm_time$Time_Date$isLeapYear(year) ? F2(
		function (x, y) {
			return x + y;
		})(1) : _elm_lang$core$Basics$identity;
	var doy = d - _elm_community$elm_time$Time_Date$daysFromYear(year);
	var _p33 = (_elm_lang$core$Native_Utils.cmp(doy, 31) < 0) ? {ctor: '_Tuple2', _0: 1, _1: doy + 1} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(59)) < 0) ? {ctor: '_Tuple2', _0: 2, _1: (doy - 31) + 1} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(90)) < 0) ? {
		ctor: '_Tuple2',
		_0: 3,
		_1: (doy - leap(59)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(120)) < 0) ? {
		ctor: '_Tuple2',
		_0: 4,
		_1: (doy - leap(90)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(151)) < 0) ? {
		ctor: '_Tuple2',
		_0: 5,
		_1: (doy - leap(120)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(181)) < 0) ? {
		ctor: '_Tuple2',
		_0: 6,
		_1: (doy - leap(151)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(212)) < 0) ? {
		ctor: '_Tuple2',
		_0: 7,
		_1: (doy - leap(181)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(243)) < 0) ? {
		ctor: '_Tuple2',
		_0: 8,
		_1: (doy - leap(212)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(273)) < 0) ? {
		ctor: '_Tuple2',
		_0: 9,
		_1: (doy - leap(243)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(304)) < 0) ? {
		ctor: '_Tuple2',
		_0: 10,
		_1: (doy - leap(273)) + 1
	} : ((_elm_lang$core$Native_Utils.cmp(
		doy,
		leap(334)) < 0) ? {
		ctor: '_Tuple2',
		_0: 11,
		_1: (doy - leap(304)) + 1
	} : {
		ctor: '_Tuple2',
		_0: 12,
		_1: (doy - leap(334)) + 1
	}))))))))));
	var month = _p33._0;
	var day = _p33._1;
	return _elm_community$elm_time$Time_Date$Date(
		{year: year + (y400 * 400), month: month, day: day});
};
var _elm_community$elm_time$Time_Date$addDays = F2(
	function (days, _p34) {
		var _p35 = _p34;
		return _elm_community$elm_time$Time_Date$dateFromDays(
			A2(
				F2(
					function (x, y) {
						return x + y;
					}),
				days,
				A3(_elm_community$elm_time$Time_Date$daysFromYearMonthDay, _p35._0.year, _p35._0.month, _p35._0.day)));
	});
var _elm_community$elm_time$Time_Date$Sun = {ctor: 'Sun'};
var _elm_community$elm_time$Time_Date$Sat = {ctor: 'Sat'};
var _elm_community$elm_time$Time_Date$Fri = {ctor: 'Fri'};
var _elm_community$elm_time$Time_Date$Thu = {ctor: 'Thu'};
var _elm_community$elm_time$Time_Date$Wed = {ctor: 'Wed'};
var _elm_community$elm_time$Time_Date$Tue = {ctor: 'Tue'};
var _elm_community$elm_time$Time_Date$Mon = {ctor: 'Mon'};
var _elm_community$elm_time$Time_Date$weekday = function (_p36) {
	var _p37 = _p36;
	var _p39 = _p37._0.year;
	var _p38 = _p37._0.month;
	var y = (_elm_lang$core$Native_Utils.cmp(_p38, 3) < 0) ? (_p39 - 1) : _p39;
	var m = _elm_lang$core$Native_Utils.eq(_p38, 1) ? 0 : (_elm_lang$core$Native_Utils.eq(_p38, 2) ? 3 : (_elm_lang$core$Native_Utils.eq(_p38, 3) ? 2 : (_elm_lang$core$Native_Utils.eq(_p38, 4) ? 5 : (_elm_lang$core$Native_Utils.eq(_p38, 5) ? 0 : (_elm_lang$core$Native_Utils.eq(_p38, 6) ? 3 : (_elm_lang$core$Native_Utils.eq(_p38, 7) ? 5 : (_elm_lang$core$Native_Utils.eq(_p38, 8) ? 1 : (_elm_lang$core$Native_Utils.eq(_p38, 9) ? 4 : (_elm_lang$core$Native_Utils.eq(_p38, 10) ? 6 : (_elm_lang$core$Native_Utils.eq(_p38, 11) ? 2 : 4))))))))));
	var d = A2(_elm_lang$core$Basics_ops['%'], ((((y + ((y / 4) | 0)) - ((y / 100) | 0)) + ((y / 400) | 0)) + m) + _p37._0.day, 7);
	return _elm_lang$core$Native_Utils.eq(d, 0) ? _elm_community$elm_time$Time_Date$Sun : (_elm_lang$core$Native_Utils.eq(d, 1) ? _elm_community$elm_time$Time_Date$Mon : (_elm_lang$core$Native_Utils.eq(d, 2) ? _elm_community$elm_time$Time_Date$Tue : (_elm_lang$core$Native_Utils.eq(d, 3) ? _elm_community$elm_time$Time_Date$Wed : (_elm_lang$core$Native_Utils.eq(d, 4) ? _elm_community$elm_time$Time_Date$Thu : (_elm_lang$core$Native_Utils.eq(d, 5) ? _elm_community$elm_time$Time_Date$Fri : _elm_community$elm_time$Time_Date$Sat)))));
};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_community$html_extra$Html_Events_Extra$onEnter = function (onEnterAction) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'keyup',
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (keyCode) {
				return _elm_lang$core$Native_Utils.eq(keyCode, 13) ? _elm_lang$core$Json_Decode$succeed(onEnterAction) : _elm_lang$core$Json_Decode$fail(
					_elm_lang$core$Basics$toString(keyCode));
			},
			_elm_lang$html$Html_Events$keyCode));
};
var _elm_community$html_extra$Html_Events_Extra$onClickPreventDefaultAndStopPropagation = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'click',
		_elm_lang$core$Native_Utils.update(
			_elm_lang$html$Html_Events$defaultOptions,
			{stopPropagation: true, preventDefault: true}),
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_community$html_extra$Html_Events_Extra$onClickStopPropagation = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'click',
		_elm_lang$core$Native_Utils.update(
			_elm_lang$html$Html_Events$defaultOptions,
			{stopPropagation: true}),
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_community$html_extra$Html_Events_Extra$onClickPreventDefault = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'click',
		_elm_lang$core$Native_Utils.update(
			_elm_lang$html$Html_Events$defaultOptions,
			{preventDefault: true}),
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_community$html_extra$Html_Events_Extra$targetSelectedIndex = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'selectedIndex',
			_1: {ctor: '[]'}
		}
	},
	A2(
		_elm_lang$core$Json_Decode$map,
		function ($int) {
			return _elm_lang$core$Native_Utils.eq($int, -1) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just($int);
		},
		_elm_lang$core$Json_Decode$int));
var _elm_community$html_extra$Html_Events_Extra$targetValueInt = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'valueAsNumber',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$int);
var _elm_community$html_extra$Html_Events_Extra$customDecoder = F2(
	function (d, f) {
		var resultDecoder = function (x) {
			var _p0 = x;
			if (_p0.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(_p0._0);
			} else {
				return _elm_lang$core$Json_Decode$fail(_p0._0);
			}
		};
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			resultDecoder,
			A2(_elm_lang$core$Json_Decode$map, f, d));
	});
var _elm_community$html_extra$Html_Events_Extra$targetValueFloat = A2(
	_elm_community$html_extra$Html_Events_Extra$customDecoder,
	A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'valueAsNumber',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$float),
	function (v) {
		return _elm_lang$core$Basics$isNaN(v) ? _elm_lang$core$Result$Err('Not a number') : _elm_lang$core$Result$Ok(v);
	});
var _elm_community$html_extra$Html_Events_Extra$targetValueMaybe = A2(
	_elm_community$html_extra$Html_Events_Extra$customDecoder,
	_elm_lang$html$Html_Events$targetValue,
	function (s) {
		return _elm_lang$core$Result$Ok(
			_elm_lang$core$Native_Utils.eq(s, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(s));
	});
var _elm_community$html_extra$Html_Events_Extra$targetValueMaybeFloat = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (mval) {
		var _p1 = mval;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Maybe$Nothing);
		} else {
			return A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_community$html_extra$Html_Events_Extra$targetValueFloat);
		}
	},
	_elm_community$html_extra$Html_Events_Extra$targetValueMaybe);
var _elm_community$html_extra$Html_Events_Extra$targetValueMaybeInt = function () {
	var traverse = F2(
		function (f, mx) {
			var _p2 = mx;
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Maybe$Just,
					f(_p2._0));
			}
		});
	return A2(
		_elm_community$html_extra$Html_Events_Extra$customDecoder,
		_elm_community$html_extra$Html_Events_Extra$targetValueMaybe,
		traverse(_elm_lang$core$String$toInt));
}();
var _elm_community$html_extra$Html_Events_Extra$targetValueFloatParse = A2(_elm_community$html_extra$Html_Events_Extra$customDecoder, _elm_lang$html$Html_Events$targetValue, _elm_lang$core$String$toFloat);
var _elm_community$html_extra$Html_Events_Extra$targetValueIntParse = A2(_elm_community$html_extra$Html_Events_Extra$customDecoder, _elm_lang$html$Html_Events$targetValue, _elm_lang$core$String$toInt);
var _elm_community$html_extra$Html_Events_Extra$targetValueMaybeFloatParse = function () {
	var traverse = F2(
		function (f, mx) {
			var _p3 = mx;
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Maybe$Just,
					f(_p3._0));
			}
		});
	return A2(
		_elm_community$html_extra$Html_Events_Extra$customDecoder,
		_elm_community$html_extra$Html_Events_Extra$targetValueMaybe,
		traverse(_elm_lang$core$String$toFloat));
}();
var _elm_community$html_extra$Html_Events_Extra$targetValueMaybeIntParse = function () {
	var traverse = F2(
		function (f, mx) {
			var _p4 = mx;
			if (_p4.ctor === 'Nothing') {
				return _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Maybe$Just,
					f(_p4._0));
			}
		});
	return A2(
		_elm_community$html_extra$Html_Events_Extra$customDecoder,
		_elm_community$html_extra$Html_Events_Extra$targetValueMaybe,
		traverse(_elm_lang$core$String$toInt));
}();
var _elm_community$html_extra$Html_Events_Extra$charCode = A2(
	_elm_lang$core$Json_Decode$map,
	function (_p5) {
		return A2(
			_elm_lang$core$Maybe$map,
			_elm_lang$core$Tuple$first,
			_elm_lang$core$String$uncons(_p5));
	},
	A2(_elm_lang$core$Json_Decode$field, 'charCode', _elm_lang$core$Json_Decode$string));

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
_elm_lang$mouse$Mouse_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return t2;
			},
			t1);
	});
var _elm_lang$mouse$Mouse$onSelfMsg = F3(
	function (router, _p1, state) {
		var _p2 = _p1;
		var _p3 = A2(_elm_lang$core$Dict$get, _p2.category, state);
		if (_p3.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p2.position));
			};
			return A2(
				_elm_lang$mouse$Mouse_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p3._0.taggers)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p4 = maybeValues;
		if (_p4.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p4._0});
		}
	});
var _elm_lang$mouse$Mouse$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p5 = subs;
			if (_p5.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p5._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p5._0._0,
					_elm_lang$mouse$Mouse$categorizeHelpHelp(_p5._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$mouse$Mouse$categorize = function (subs) {
	return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
var _elm_lang$mouse$Mouse$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _elm_lang$mouse$Mouse$position = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$mouse$Mouse$Position,
	A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
var _elm_lang$mouse$Mouse$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$mouse$Mouse$Msg = F2(
	function (a, b) {
		return {category: a, position: b};
	});
var _elm_lang$mouse$Mouse$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				var tracker = A3(
					_elm_lang$dom$Dom_LowLevel$onDocument,
					category,
					_elm_lang$mouse$Mouse$position,
					function (_p6) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$mouse$Mouse$Msg, category, _p6));
					});
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(tracker));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p7, taggers, task) {
				var _p8 = _p7;
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p8.pid),
								state));
					},
					task);
			});
		var leftStep = F3(
			function (category, _p9, task) {
				var _p10 = _p9;
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Process$kill(_p10.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$mouse$Mouse$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$mouse$Mouse$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$mouse$Mouse$clicks = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
};
var _elm_lang$mouse$Mouse$moves = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
};
var _elm_lang$mouse$Mouse$downs = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
};
var _elm_lang$mouse$Mouse$ups = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
};
var _elm_lang$mouse$Mouse$subMap = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return A2(
			_elm_lang$mouse$Mouse$MySub,
			_p12._0,
			function (_p13) {
				return func(
					_p12._1(_p13));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

var _user$project$Date_Extra$daysFromMonday = function (weekday) {
	var _p0 = weekday;
	switch (_p0.ctor) {
		case 'Mon':
			return 0;
		case 'Tue':
			return 1;
		case 'Wed':
			return 2;
		case 'Thu':
			return 3;
		case 'Fri':
			return 4;
		case 'Sat':
			return 5;
		default:
			return 6;
	}
};
var _user$project$Date_Extra$range = F2(
	function (from, to) {
		var _p1 = A2(_elm_community$elm_time$Time_Date$compare, from, to);
		switch (_p1.ctor) {
			case 'LT':
				return {
					ctor: '::',
					_0: from,
					_1: A2(
						_user$project$Date_Extra$range,
						A2(_elm_community$elm_time$Time_Date$addDays, 1, from),
						to)
				};
			case 'EQ':
				return {
					ctor: '::',
					_0: to,
					_1: {ctor: '[]'}
				};
			default:
				return {ctor: '[]'};
		}
	});

var _user$project$Types$Flags = F3(
	function (a, b, c) {
		return {savedData: a, currentDate: b, seedForColor: c};
	});
var _user$project$Types$Model = F8(
	function (a, b, c, d, e, f, g, h) {
		return {currentDate: a, ideas: b, newIdeaInput: c, plans: d, dragState: e, currentlyHoveredDate: f, mouse: g, lastColor: h};
	});
var _user$project$Types$PersistentData = F3(
	function (a, b, c) {
		return {ideas: a, plans: b, lastColor: c};
	});
var _user$project$Types$Day = F2(
	function (a, b) {
		return {date: a, plan: b};
	});
var _user$project$Types$Plan = function (a) {
	return {idea: a};
};
var _user$project$Types$Idea = F2(
	function (a, b) {
		return {text: a, rgbColor: b};
	});
var _user$project$Types$DraggingPlan = function (a) {
	return {ctor: 'DraggingPlan', _0: a};
};
var _user$project$Types$DraggingIdea = function (a) {
	return {ctor: 'DraggingIdea', _0: a};
};
var _user$project$Types$NoDrag = {ctor: 'NoDrag'};
var _user$project$Types$MouseMoved = function (a) {
	return {ctor: 'MouseMoved', _0: a};
};
var _user$project$Types$StopDrag = {ctor: 'StopDrag'};
var _user$project$Types$DragLeaveDay = {ctor: 'DragLeaveDay'};
var _user$project$Types$DragOverDay = function (a) {
	return {ctor: 'DragOverDay', _0: a};
};
var _user$project$Types$DragPlan = function (a) {
	return {ctor: 'DragPlan', _0: a};
};
var _user$project$Types$DragIdea = function (a) {
	return {ctor: 'DragIdea', _0: a};
};
var _user$project$Types$RemoveIdea = function (a) {
	return {ctor: 'RemoveIdea', _0: a};
};
var _user$project$Types$AddNewIdea = {ctor: 'AddNewIdea'};
var _user$project$Types$SetNewIdeaInput = function (a) {
	return {ctor: 'SetNewIdeaInput', _0: a};
};

var _user$project$Calendar$withPlans = F2(
	function (plans, dates) {
		return A2(
			_elm_lang$core$List$map,
			function (date) {
				return {
					date: date,
					plan: A2(
						_elm_lang$core$Dict$get,
						_elm_community$elm_time$Time_Date$toTuple(date),
						plans)
				};
			},
			dates);
	});
var _user$project$Calendar$currentDates = function (currentDate) {
	var weekday = _elm_community$elm_time$Time_Date$weekday(currentDate);
	var subtractDays = _user$project$Date_Extra$daysFromMonday(weekday);
	var lastMonday = A2(_elm_community$elm_time$Time_Date$addDays, 0 - subtractDays, currentDate);
	var weekBeforeLastMonday = A2(_elm_community$elm_time$Time_Date$addDays, -7, lastMonday);
	var sundayFourWeeksFromLastMonday = A2(_elm_community$elm_time$Time_Date$addDays, (7 * 4) - 1, lastMonday);
	return A2(_user$project$Date_Extra$range, weekBeforeLastMonday, sundayFourWeeksFromLastMonday);
};

var _user$project$Color_Extra$fromTuple = function (_p0) {
	var _p1 = _p0;
	return A3(_elm_lang$core$Color$rgb, _p1._0, _p1._1, _p1._2);
};
var _user$project$Color_Extra$toTuple = function (color) {
	var _p2 = _elm_lang$core$Color$toRgb(color);
	var red = _p2.red;
	var green = _p2.green;
	var blue = _p2.blue;
	return {ctor: '_Tuple3', _0: red, _1: green, _2: blue};
};

var _user$project$PersistentData$fromModel = function (model) {
	return {
		ideas: A2(
			_elm_lang$core$List$map,
			function (_p0) {
				var _p1 = _p0;
				return {text: _p1.text, rgbColor: _p1.rgbColor};
			},
			model.ideas),
		plans: _elm_lang$core$Dict$toList(model.plans),
		lastColor: _elm_lang$core$Maybe$Just(
			_user$project$Color_Extra$toTuple(model.lastColor))
	};
};

var _user$project$View_Calendar$enableDragEnd = F2(
	function (day, dragState) {
		return _elm_lang$core$Native_Utils.eq(dragState, _user$project$Types$NoDrag) ? {ctor: '[]'} : {
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onMouseOver(
				_user$project$Types$DragOverDay(day.date)),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onMouseOut(_user$project$Types$DragLeaveDay),
				_1: {ctor: '[]'}
			}
		};
	});
var _user$project$View_Calendar$enableDragPlan = function (day) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		{ctor: '[]'},
		A2(
			_elm_lang$core$Maybe$map,
			function (plan) {
				return {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onMouseDown(
						_user$project$Types$DragPlan(
							{ctor: '_Tuple2', _0: day.date, _1: plan})),
					_1: {ctor: '[]'}
				};
			},
			day.plan));
};
var _user$project$View_Calendar$day = F3(
	function (today, dragState, day) {
		var color = A2(
			_elm_lang$core$Maybe$map,
			function (_) {
				return _.rgbColor;
			},
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.idea;
				},
				day.plan));
		var maybeBgColor = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				function (_p0) {
					var _p1 = _p0;
					return {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'background-color',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'rgb(',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(_p1._0),
											A2(
												_elm_lang$core$Basics_ops['++'],
												',',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_p1._1),
													A2(
														_elm_lang$core$Basics_ops['++'],
														',',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(_p1._2),
															')'))))))
								},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					};
				},
				color));
		var isToday = _elm_lang$core$Native_Utils.eq(today, day.date);
		return A2(
			_elm_lang$html$Html$div,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'day', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'today', _1: isToday},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'past',
										_1: _elm_lang$core$Native_Utils.eq(
											A2(_elm_community$elm_time$Time_Date$compare, day.date, today),
											_elm_lang$core$Basics$LT)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'no-plan',
											_1: _elm_lang$core$Native_Utils.eq(day.plan, _elm_lang$core$Maybe$Nothing)
										},
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					maybeBgColor,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_user$project$View_Calendar$enableDragPlan(day),
						A2(_user$project$View_Calendar$enableDragEnd, day, dragState)))),
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('date'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_community$elm_time$Time_Date$day(day.date)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'. ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_community$elm_time$Time_Date$month(day.date)),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'.',
											isToday ? ' - today' : ''))))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('plan'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Maybe$withDefault,
									'no plan',
									A2(
										_elm_lang$core$Maybe$map,
										function (_) {
											return _.text;
										},
										A2(
											_elm_lang$core$Maybe$map,
											function (_) {
												return _.idea;
											},
											day.plan)))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$View_Calendar$dayHeader = function (day) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('day-header'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(day),
			_1: {ctor: '[]'}
		});
};
var _user$project$View_Calendar$daysOfWeek = {
	ctor: '::',
	_0: 'Mon',
	_1: {
		ctor: '::',
		_0: 'Tue',
		_1: {
			ctor: '::',
			_0: 'Wed',
			_1: {
				ctor: '::',
				_0: 'Thu',
				_1: {
					ctor: '::',
					_0: 'Fri',
					_1: {
						ctor: '::',
						_0: 'Sat',
						_1: {
							ctor: '::',
							_0: 'Sun',
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	}
};
var _user$project$View_Calendar$calendarHeader = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('calendar-header'),
		_1: {ctor: '[]'}
	},
	A2(_elm_lang$core$List$map, _user$project$View_Calendar$dayHeader, _user$project$View_Calendar$daysOfWeek));
var _user$project$View_Calendar$calendar = function (_p2) {
	var _p3 = _p2;
	var _p4 = _p3.currentDate;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('calendar'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$View_Calendar$calendarHeader,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('days'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						A2(_user$project$View_Calendar$day, _p4, _p3.dragState),
						A2(
							_user$project$Calendar$withPlans,
							_p3.plans,
							_user$project$Calendar$currentDates(_p4)))),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$View_Debug$toHtml = F2(
	function (label, a) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('debug-item'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('debug-label'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(label),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						_elm_lang$core$Basics$toString(a)),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$View_Debug$debug = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('debug'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(_user$project$View_Debug$toHtml, 'mouse', model.mouse),
			_1: {
				ctor: '::',
				_0: A2(_user$project$View_Debug$toHtml, 'dragState', model.dragState),
				_1: {
					ctor: '::',
					_0: A2(_user$project$View_Debug$toHtml, 'currentlyHoveredDate', model.currentlyHoveredDate),
					_1: {ctor: '[]'}
				}
			}
		});
};

var _user$project$View_Ideas$removeIdeaButton = function (index) {
	return A2(
		_elm_lang$html$Html$button,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('remove-idea'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_user$project$Types$RemoveIdea(index)),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('X'),
			_1: {ctor: '[]'}
		});
};
var _user$project$View_Ideas$px = function (amount) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(amount),
		'px');
};
var _user$project$View_Ideas$draggedIdea = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1.mouse;
	var view = function (idea) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('idea dragged'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'left',
								_1: _user$project$View_Ideas$px(_p3.x + 20)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: _user$project$View_Ideas$px(_p3.y + 20)
								},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('idea-content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(idea.text),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _p2 = _p1.dragState;
	switch (_p2.ctor) {
		case 'NoDrag':
			return _elm_lang$html$Html$text('');
		case 'DraggingIdea':
			return view(_p2._0);
		default:
			return view(_p2._0._1.idea);
	}
};
var _user$project$View_Ideas$frequency = F2(
	function (plans, ideaText) {
		var frequencies = _elm_community$dict_extra$Dict_Extra$frequencies(
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.text;
				},
				A2(
					_elm_lang$core$List$map,
					function (_) {
						return _.idea;
					},
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Tuple$second,
						_elm_lang$core$Dict$toList(plans)))));
		var biggestFrequency = A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (idea, frequency, maxSoFar) {
					return A2(_elm_lang$core$Basics$max, maxSoFar, frequency);
				}),
			0,
			frequencies);
		var thisFrequency = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Dict$get, ideaText, frequencies));
		var difference = biggestFrequency - thisFrequency;
		return _elm_lang$html$Html$text(
			A2(_elm_lang$core$String$repeat, difference, '•'));
	});
var _user$project$View_Ideas$idea = F3(
	function (plans, index, _p4) {
		var _p5 = _p4;
		var _p7 = _p5.text;
		var _p6 = _p5.rgbColor;
		var red = _p6._0;
		var green = _p6._1;
		var blue = _p6._2;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('idea'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onMouseDown(
						_user$project$Types$DragIdea(_p5)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'background-color',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'rgb(',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(red),
											A2(
												_elm_lang$core$Basics_ops['++'],
												',',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(green),
													A2(
														_elm_lang$core$Basics_ops['++'],
														',',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(blue),
															')'))))))
								},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('idea-content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('idea-text'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p7),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('idea-frequency'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$title('The dots mean: How much do you neglect this idea?'),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(_user$project$View_Ideas$frequency, plans, _p7),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$View_Ideas$removeIdeaButton(index),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$View_Ideas$addNewIdeaButton = A2(
	_elm_lang$html$Html$button,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Events$onClick(_user$project$Types$AddNewIdea),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('add-new-idea'),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('Add'),
		_1: {ctor: '[]'}
	});
var _user$project$View_Ideas$ideas = function (_p8) {
	var _p9 = _p8;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('ideas-column'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('ideas-wrapper'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('inputs'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$input,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$type_('text'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(_user$project$Types$SetNewIdeaInput),
										_1: {
											ctor: '::',
											_0: _elm_community$html_extra$Html_Events_Extra$onEnter(_user$project$Types$AddNewIdea),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$value(_p9.newIdeaInput),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$placeholder('New idea...'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$class('new-idea'),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: _user$project$View_Ideas$addNewIdeaButton,
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('ideas'),
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$List$indexedMap,
								_user$project$View_Ideas$idea(_p9.plans),
								_p9.ideas)),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$View_Debug$debug(_p9),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$View$enableDragEnd = function (dragState) {
	return _elm_lang$core$Native_Utils.eq(dragState, _user$project$Types$NoDrag) ? {ctor: '[]'} : {
		ctor: '::',
		_0: _elm_lang$html$Html_Events$onMouseUp(_user$project$Types$StopDrag),
		_1: {ctor: '[]'}
	};
};
var _user$project$View$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'app', _1: true},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'dragging',
								_1: !_elm_lang$core$Native_Utils.eq(model.dragState, _user$project$Types$NoDrag)
							},
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			},
			_user$project$View$enableDragEnd(model.dragState)),
		{
			ctor: '::',
			_0: _user$project$View_Ideas$ideas(model),
			_1: {
				ctor: '::',
				_0: _user$project$View_Calendar$calendar(model),
				_1: {
					ctor: '::',
					_0: _user$project$View_Ideas$draggedIdea(model),
					_1: {ctor: '[]'}
				}
			}
		});
};

var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$mouse$Mouse$moves(_user$project$Types$MouseMoved);
};
var _user$project$Main$init = function (_p0) {
	var _p1 = _p0;
	var _p2 = A2(
		_mgold$elm_random_pcg$Random_Pcg$step,
		_Janiczek$distinct_colors$DistinctColors_HSLuv$randomColor(
			{lightness: 0.96, saturation: 1, alpha: 1}),
		_mgold$elm_random_pcg$Random_Pcg$initialSeed(_p1.seedForColor));
	var color = _p2._0;
	var _p3 = A2(
		_elm_lang$core$Maybe$withDefault,
		{
			ideas: {ctor: '[]'},
			plans: {ctor: '[]'},
			lastColor: _elm_lang$core$Maybe$Nothing
		},
		_p1.savedData);
	var ideas = _p3.ideas;
	var plans = _p3.plans;
	var lastColor = _p3.lastColor;
	var plansDict = _elm_lang$core$Dict$fromList(plans);
	return {
		ctor: '_Tuple2',
		_0: {
			ideas: ideas,
			newIdeaInput: '',
			plans: plansDict,
			currentDate: _elm_community$elm_time$Time_Date$fromTuple(_p1.currentDate),
			currentlyHoveredDate: _elm_lang$core$Maybe$Nothing,
			dragState: _user$project$Types$NoDrag,
			mouse: {x: 0, y: 0},
			lastColor: A2(
				_elm_lang$core$Maybe$withDefault,
				color,
				A2(_elm_lang$core$Maybe$map, _user$project$Color_Extra$fromTuple, lastColor))
		},
		_1: _elm_lang$core$Platform_Cmd$none
	};
};
var _user$project$Main$save = _elm_lang$core$Native_Platform.outgoingPort(
	'save',
	function (v) {
		return {
			ideas: _elm_lang$core$Native_List.toArray(v.ideas).map(
				function (v) {
					return {
						text: v.text,
						rgbColor: [v.rgbColor._0, v.rgbColor._1, v.rgbColor._2]
					};
				}),
			plans: _elm_lang$core$Native_List.toArray(v.plans).map(
				function (v) {
					return [
						[v._0._0, v._0._1, v._0._2],
						{
						idea: {
							text: v._1.idea.text,
							rgbColor: [v._1.idea.rgbColor._0, v._1.idea.rgbColor._1, v._1.idea.rgbColor._2]
						}
					}
					];
				}),
			lastColor: (v.lastColor.ctor === 'Nothing') ? null : [v.lastColor._0._0, v.lastColor._0._1, v.lastColor._0._2]
		};
	});
var _user$project$Main$save_ = function (model) {
	return {
		ctor: '_Tuple2',
		_0: model,
		_1: _user$project$Main$save(
			_user$project$PersistentData$fromModel(model))
	};
};
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p4 = msg;
		switch (_p4.ctor) {
			case 'SetNewIdeaInput':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{newIdeaInput: _p4._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'AddNewIdea':
				if (_elm_lang$core$String$isEmpty(model.newIdeaInput)) {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				} else {
					var newColor = _Janiczek$distinct_colors$DistinctColors_HSLuv$nextColor(model.lastColor);
					return _user$project$Main$save_(
						_elm_lang$core$Native_Utils.update(
							model,
							{
								ideas: {
									ctor: '::',
									_0: {
										text: model.newIdeaInput,
										rgbColor: _user$project$Color_Extra$toTuple(newColor)
									},
									_1: model.ideas
								},
								newIdeaInput: '',
								lastColor: newColor
							}));
				}
			case 'RemoveIdea':
				return _user$project$Main$save_(
					_elm_lang$core$Native_Utils.update(
						model,
						{
							ideas: A2(
								_elm_lang$core$List$map,
								_elm_lang$core$Tuple$second,
								A2(
									_elm_lang$core$List$filter,
									function (_p5) {
										var _p6 = _p5;
										return !_elm_lang$core$Native_Utils.eq(_p6._0, _p4._0);
									},
									A2(
										_elm_lang$core$List$indexedMap,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											}),
										model.ideas)))
						}));
			case 'DragIdea':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							dragState: _user$project$Types$DraggingIdea(_p4._0),
							currentlyHoveredDate: _elm_lang$core$Maybe$Nothing
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DragPlan':
				var _p7 = _p4._0._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							dragState: _user$project$Types$DraggingPlan(
								{ctor: '_Tuple2', _0: _p7, _1: _p4._0._1}),
							currentlyHoveredDate: _elm_lang$core$Maybe$Just(_p7)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DragOverDay':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							currentlyHoveredDate: _elm_lang$core$Maybe$Just(_p4._0)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DragLeaveDay':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{currentlyHoveredDate: _elm_lang$core$Maybe$Nothing}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'StopDrag':
				var modelWithoutDrag = _elm_lang$core$Native_Utils.update(
					model,
					{currentlyHoveredDate: _elm_lang$core$Maybe$Nothing, dragState: _user$project$Types$NoDrag});
				return _user$project$Main$save_(
					function () {
						var _p8 = model.dragState;
						switch (_p8.ctor) {
							case 'DraggingIdea':
								return A2(
									_elm_lang$core$Maybe$withDefault,
									modelWithoutDrag,
									A2(
										_elm_lang$core$Maybe$map,
										function (date) {
											return _elm_lang$core$Native_Utils.update(
												modelWithoutDrag,
												{
													plans: A3(
														_elm_lang$core$Dict$insert,
														_elm_community$elm_time$Time_Date$toTuple(date),
														{idea: _p8._0},
														modelWithoutDrag.plans)
												});
										},
										model.currentlyHoveredDate));
							case 'DraggingPlan':
								var modelWithoutDraggedPlan = _elm_lang$core$Native_Utils.update(
									modelWithoutDrag,
									{
										plans: A2(
											_elm_lang$core$Dict$remove,
											_elm_community$elm_time$Time_Date$toTuple(_p8._0._0),
											modelWithoutDrag.plans)
									});
								return A2(
									_elm_lang$core$Maybe$withDefault,
									modelWithoutDraggedPlan,
									A2(
										_elm_lang$core$Maybe$map,
										function (date) {
											return _elm_lang$core$Native_Utils.update(
												modelWithoutDraggedPlan,
												{
													plans: A3(
														_elm_lang$core$Dict$insert,
														_elm_community$elm_time$Time_Date$toTuple(date),
														_p8._0._1,
														modelWithoutDraggedPlan.plans)
												});
										},
										model.currentlyHoveredDate));
							default:
								return modelWithoutDrag;
						}
					}());
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{mouse: _p4._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});
var _user$project$Main$main = _elm_lang$html$Html$programWithFlags(
	{init: _user$project$Main$init, update: _user$project$Main$update, view: _user$project$View$view, subscriptions: _user$project$Main$subscriptions})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (currentDate) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (savedData) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (seedForColor) {
							return _elm_lang$core$Json_Decode$succeed(
								{currentDate: currentDate, savedData: savedData, seedForColor: seedForColor});
						},
						A2(_elm_lang$core$Json_Decode$field, 'seedForColor', _elm_lang$core$Json_Decode$int));
				},
				A2(
					_elm_lang$core$Json_Decode$field,
					'savedData',
					_elm_lang$core$Json_Decode$oneOf(
						{
							ctor: '::',
							_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$core$Json_Decode$map,
									_elm_lang$core$Maybe$Just,
									A2(
										_elm_lang$core$Json_Decode$andThen,
										function (ideas) {
											return A2(
												_elm_lang$core$Json_Decode$andThen,
												function (lastColor) {
													return A2(
														_elm_lang$core$Json_Decode$andThen,
														function (plans) {
															return _elm_lang$core$Json_Decode$succeed(
																{ideas: ideas, lastColor: lastColor, plans: plans});
														},
														A2(
															_elm_lang$core$Json_Decode$field,
															'plans',
															_elm_lang$core$Json_Decode$list(
																A2(
																	_elm_lang$core$Json_Decode$andThen,
																	function (x0) {
																		return A2(
																			_elm_lang$core$Json_Decode$andThen,
																			function (x1) {
																				return _elm_lang$core$Json_Decode$succeed(
																					{ctor: '_Tuple2', _0: x0, _1: x1});
																			},
																			A2(
																				_elm_lang$core$Json_Decode$index,
																				1,
																				A2(
																					_elm_lang$core$Json_Decode$andThen,
																					function (idea) {
																						return _elm_lang$core$Json_Decode$succeed(
																							{idea: idea});
																					},
																					A2(
																						_elm_lang$core$Json_Decode$field,
																						'idea',
																						A2(
																							_elm_lang$core$Json_Decode$andThen,
																							function (rgbColor) {
																								return A2(
																									_elm_lang$core$Json_Decode$andThen,
																									function (text) {
																										return _elm_lang$core$Json_Decode$succeed(
																											{rgbColor: rgbColor, text: text});
																									},
																									A2(_elm_lang$core$Json_Decode$field, 'text', _elm_lang$core$Json_Decode$string));
																							},
																							A2(
																								_elm_lang$core$Json_Decode$field,
																								'rgbColor',
																								A2(
																									_elm_lang$core$Json_Decode$andThen,
																									function (x0) {
																										return A2(
																											_elm_lang$core$Json_Decode$andThen,
																											function (x1) {
																												return A2(
																													_elm_lang$core$Json_Decode$andThen,
																													function (x2) {
																														return _elm_lang$core$Json_Decode$succeed(
																															{ctor: '_Tuple3', _0: x0, _1: x1, _2: x2});
																													},
																													A2(_elm_lang$core$Json_Decode$index, 2, _elm_lang$core$Json_Decode$int));
																											},
																											A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$int));
																									},
																									A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$int))))))));
																	},
																	A2(
																		_elm_lang$core$Json_Decode$index,
																		0,
																		A2(
																			_elm_lang$core$Json_Decode$andThen,
																			function (x0) {
																				return A2(
																					_elm_lang$core$Json_Decode$andThen,
																					function (x1) {
																						return A2(
																							_elm_lang$core$Json_Decode$andThen,
																							function (x2) {
																								return _elm_lang$core$Json_Decode$succeed(
																									{ctor: '_Tuple3', _0: x0, _1: x1, _2: x2});
																							},
																							A2(_elm_lang$core$Json_Decode$index, 2, _elm_lang$core$Json_Decode$int));
																					},
																					A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$int));
																			},
																			A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$int)))))));
												},
												A2(
													_elm_lang$core$Json_Decode$field,
													'lastColor',
													_elm_lang$core$Json_Decode$oneOf(
														{
															ctor: '::',
															_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$core$Json_Decode$map,
																	_elm_lang$core$Maybe$Just,
																	A2(
																		_elm_lang$core$Json_Decode$andThen,
																		function (x0) {
																			return A2(
																				_elm_lang$core$Json_Decode$andThen,
																				function (x1) {
																					return A2(
																						_elm_lang$core$Json_Decode$andThen,
																						function (x2) {
																							return _elm_lang$core$Json_Decode$succeed(
																								{ctor: '_Tuple3', _0: x0, _1: x1, _2: x2});
																						},
																						A2(_elm_lang$core$Json_Decode$index, 2, _elm_lang$core$Json_Decode$int));
																				},
																				A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$int));
																		},
																		A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$int))),
																_1: {ctor: '[]'}
															}
														})));
										},
										A2(
											_elm_lang$core$Json_Decode$field,
											'ideas',
											_elm_lang$core$Json_Decode$list(
												A2(
													_elm_lang$core$Json_Decode$andThen,
													function (rgbColor) {
														return A2(
															_elm_lang$core$Json_Decode$andThen,
															function (text) {
																return _elm_lang$core$Json_Decode$succeed(
																	{rgbColor: rgbColor, text: text});
															},
															A2(_elm_lang$core$Json_Decode$field, 'text', _elm_lang$core$Json_Decode$string));
													},
													A2(
														_elm_lang$core$Json_Decode$field,
														'rgbColor',
														A2(
															_elm_lang$core$Json_Decode$andThen,
															function (x0) {
																return A2(
																	_elm_lang$core$Json_Decode$andThen,
																	function (x1) {
																		return A2(
																			_elm_lang$core$Json_Decode$andThen,
																			function (x2) {
																				return _elm_lang$core$Json_Decode$succeed(
																					{ctor: '_Tuple3', _0: x0, _1: x1, _2: x2});
																			},
																			A2(_elm_lang$core$Json_Decode$index, 2, _elm_lang$core$Json_Decode$int));
																	},
																	A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$int));
															},
															A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$int)))))))),
								_1: {ctor: '[]'}
							}
						})));
		},
		A2(
			_elm_lang$core$Json_Decode$field,
			'currentDate',
			A2(
				_elm_lang$core$Json_Decode$andThen,
				function (x0) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (x1) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (x2) {
									return _elm_lang$core$Json_Decode$succeed(
										{ctor: '_Tuple3', _0: x0, _1: x1, _2: x2});
								},
								A2(_elm_lang$core$Json_Decode$index, 2, _elm_lang$core$Json_Decode$int));
						},
						A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$int));
				},
				A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$int)))));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

