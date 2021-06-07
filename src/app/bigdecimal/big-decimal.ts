export class BigDecimal {
	static DECIMALS: number = 18;
	static SHIFT = BigInt('1' + '0'.repeat(BigDecimal.DECIMALS));
	_value: bigint;

	constructor(value: number | string | BigDecimal) {
		let [ints, decis] = String(value).split('.')
		if (decis && decis.length > 0) {
			this._value = BigInt(ints + decis.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS));
		} else {
			this._value = BigInt(ints + '0'.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		}

	}
	getValue() {
		let seed = this._value.toString();
		if (seed == "0") return "0"
		seed = seed.slice(0, -BigDecimal.DECIMALS) + "." + seed.slice(-BigDecimal.DECIMALS).replace(/\.?0+$/, '');
		console.log("seed getValue -->> ", seed)

		let [ints, decis] = String(seed).split('.')
		if (ints && decis && decis.length > 0) {
			return seed
		}
		return ints
	}

	multiply(num: number) {
		let [ints, decis] = String(num).split('.')
		let convertBigInt = BigInt(ints)
		if (decis && decis.length > 0) {
			convertBigInt = BigInt(convertBigInt + decis.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		} else {
			convertBigInt = BigInt(convertBigInt + '0'.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		}
		let result = this._value * convertBigInt / BigDecimal.SHIFT
		console.log("this._value multiply -->> ", this._value)
		console.log("* convertBigInt multiply -->> ", convertBigInt)
		console.log("BigDecimal.SHIFT -->> ", BigDecimal.SHIFT)
		console.log("result multiply -->> ", result)
		let resultStr = result.toString().slice(0, -BigDecimal.DECIMALS) + "." + result.toString().slice(-BigDecimal.DECIMALS).replace(/\.?0+$/, '');
		console.log("resultStr multiply --->> ", resultStr)
		return new BigDecimal(resultStr);
	}

	add(num: number) {
		let [ints, decis] = String(num).split('.')
		let convertBigInt = BigInt(ints)
		if (decis && decis.length > 0) {
			convertBigInt = BigInt(convertBigInt + decis.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		} else {
			convertBigInt = BigInt(convertBigInt + '0'.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		}
		let result = this._value + convertBigInt
		let resultStr = result.toString().slice(0, -BigDecimal.DECIMALS) + "." + result.toString().slice(-BigDecimal.DECIMALS).replace(/\.?0+$/, '');
		console.log("resultStr multiply add--->> ", resultStr)
		return new BigDecimal(resultStr);
	}

	subtract(num: number) {
		let [ints, decis] = String(num).split('.')
		let convertBigInt = BigInt(ints)
		if (decis && decis.length > 0) {
			convertBigInt = BigInt(convertBigInt + decis.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		} else {
			convertBigInt = BigInt(convertBigInt + '0'.padEnd(BigDecimal.DECIMALS, '0').slice(0, BigDecimal.DECIMALS))
		}
		let result = this._value - convertBigInt
		let resultStr = result.toString().slice(0, -BigDecimal.DECIMALS) + "." + result.toString().slice(-BigDecimal.DECIMALS).replace(/\.?0+$/, '');
		console.log("resultStr multiply subtract--->> ", resultStr)
		return new BigDecimal(resultStr);
	}

	toFixed(decimal: number = 0) {
		let seed = this._value.toString();
		if (seed == "0") return "0." + '0'.padEnd(decimal, '0')
		console.log("s ->> ", seed)
		// console.log("decimal ->> ", decimal)
		if (BigDecimal.DECIMALS > 0 && decimal > 0) {

			let fixedDecimal = seed.slice(0, -(BigDecimal.DECIMALS - (decimal + 1)))
			console.log("fixedDecimal ->> ", fixedDecimal)
			let result = (BigInt(fixedDecimal) / 10n)
			let roundDecimal = BigInt(fixedDecimal) % 10n
			if (Number(roundDecimal) >= 5) {
				result = (BigInt(fixedDecimal) / 10n) + 1n
			}
			return result.toString().slice(0, -decimal) + "." + result.toString().slice(-decimal)
		} else if (decimal == 0) {
			return seed.slice(0, -(BigDecimal.DECIMALS - decimal))
		}
		return seed + "." + '0'.padEnd(decimal, '0')

	}

}