(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return `${str}${this.toString()}`;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return `${this.toString()}${str}`;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if (this.toString().length === 0) {
            return true;
        }

        return false;
    };

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return '.'.repeat(n);
        }

        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastSpaceIndex = this.toString().substr(0, n - 2).lastIndexOf(' ');
            if (lastSpaceIndex === -1) {
                return `${this.toString().substr(0, n - 3)}...`;
            } else {
                return `${this.toString().substr(0, lastSpaceIndex)}...`;
            }
        }
    };

    String.format = function (str, ...array) {
        for (let i = 0; i < array.length; i++) {
            let placeHolder = `{${i}}`;
            if (str.includes(placeHolder)) {
                str = str.replace(placeHolder, array[i]);
            }
        }

        return str.toString();
    };
})();
