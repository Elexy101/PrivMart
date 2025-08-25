/******/ var __webpack_modules__ = ({

/***/ "./adapter.ts":
/*!********************!*\
  !*** ./adapter.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeoWalletAdapter: () => (/* binding */ LeoWalletAdapter),
/* harmony export */   LeoWalletName: () => (/* binding */ LeoWalletName)
/* harmony export */ });
/* harmony import */ var _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @demox-labs/aleo-wallet-adapter-base */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js");
/* harmony import */ var _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__);

const LeoWalletName = 'Leo Wallet';
class LeoWalletAdapter extends _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseMessageSignerWalletAdapter {
    name = LeoWalletName;
    icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII=';
    url;
    supportedTransactionVersions = null;
    _connecting;
    _wallet;
    _publicKey;
    _decryptPermission;
    _readyState = typeof window === 'undefined' || typeof document === 'undefined'
        ? _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Unsupported
        : _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.NotDetected;
    constructor({ appName = 'sample', isMobile = false, mobileWebviewUrl } = {}) {
        super();
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        this._decryptPermission = _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt;
        this.url = isMobile ? `https://app.leo.app/browser?url=${mobileWebviewUrl}` : 'https://app.leo.app';
        if (this._readyState !== _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Unsupported) {
            (0,_demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy)(() => {
                if (window?.leoWallet || window?.leo) {
                    this._readyState = _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    // Wakeup service worker
                    if (window?.leoWallet && window?.leoWallet.isAvailable) {
                        window?.leoWallet.isAvailable();
                    }
                    return true;
                }
                return false;
            });
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get decryptPermission() {
        return this._decryptPermission;
    }
    get connecting() {
        return this._connecting;
    }
    get readyState() {
        return this._readyState;
    }
    set readyState(readyState) {
        this._readyState = readyState;
    }
    async decrypt(cipherText, tpk, programId, functionName, index) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            switch (this._decryptPermission) {
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt:
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionNotAllowedError();
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.UponRequest:
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.AutoDecrypt:
                case _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.OnChainHistory:
                    {
                        try {
                            const text = await wallet.decrypt(cipherText, tpk, programId, functionName, index);
                            return text.text;
                        }
                        catch (error) {
                            throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionError(error?.message, error);
                        }
                    }
                default:
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDecryptionError();
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestRecords(program) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestRecords(program);
                return result.records;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletRecordsError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestTransaction(transaction) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestTransaction(transaction);
                return result.transactionId;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestExecution(transaction) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestExecution(transaction);
                return result.transactionId;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestBulkTransactions(transactions) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestBulkTransactions(transactions);
                return result.transactionIds;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestDeploy(deployment) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestDeploy(deployment);
                return result.transactionId;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async transactionStatus(transactionId) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.transactionStatus(transactionId);
                return result.status;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async transitionViewKeys(transactionId) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.transitionViewKeys(transactionId);
                return result.viewKeys;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async getExecution(transactionId) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.getExecution(transactionId);
                return result.execution;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestRecordPlaintexts(program) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestRecordPlaintexts(program);
                return result.records;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletRecordsError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async requestTransactionHistory(program) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const result = await wallet.requestTransactionHistory(program);
                return result.transactions;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletRecordsError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async connect(decryptPermission, network, programs) {
        try {
            if (this.connected || this.connecting)
                return;
            if (this._readyState !== _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotReadyError();
            this._connecting = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.leoWallet || window.leo;
            const isAvailable = wallet.isAvailable ? await wallet.isAvailable() : true;
            if (!isAvailable)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError('The wallet is not available');
            try {
                await wallet.connect(decryptPermission, network, programs);
                if (!wallet?.publicKey) {
                    throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError();
                }
                this._publicKey = wallet.publicKey;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(error?.message, error);
            }
            this._wallet = wallet;
            this._decryptPermission = decryptPermission;
            this.emit('connect', this._publicKey);
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
        finally {
            this._connecting = false;
        }
    }
    async disconnect() {
        const wallet = this._wallet;
        if (wallet) {
            // wallet.off('disconnect', this._disconnected);
            this._wallet = null;
            this._publicKey = null;
            try {
                await wallet.disconnect();
            }
            catch (error) {
                this.emit('error', new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(error?.message, error));
            }
        }
        this.emit('disconnect');
    }
    async signMessage(message) {
        try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
                const signature = await wallet.signMessage(message);
                return signature.signature;
            }
            catch (error) {
                throw new _demox_labs_aleo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
}


/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scopePollingDetectionStrategy = exports.BaseWalletAdapter = exports.WalletReadyState = exports.EventEmitter = void 0;
const eventemitter3_1 = __importDefault(__webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js"));
exports.EventEmitter = eventemitter3_1.default;
/**
 * A wallet's readiness describes a series of states that the wallet can be in,
 * depending on what kind of wallet it is. An installable wallet (eg. a browser
 * extension like Phantom) might be `Installed` if we've found the Phantom API
 * in the global scope, or `NotDetected` otherwise. A loadable, zero-install
 * runtime (eg. Torus Wallet) might simply signal that it's `Loadable`. Use this
 * metadata to personalize the wallet list for each user (eg. to show their
 * installed wallets first).
 */
var WalletReadyState;
(function (WalletReadyState) {
    /**
     * User-installable wallets can typically be detected by scanning for an API
     * that they've injected into the global context. If such an API is present,
     * we consider the wallet to have been installed.
     */
    WalletReadyState["Installed"] = "Installed";
    WalletReadyState["NotDetected"] = "NotDetected";
    /**
     * Loadable wallets are always available to you. Since you can load them at
     * any time, it's meaningless to say that they have been detected.
     */
    WalletReadyState["Loadable"] = "Loadable";
    /**
     * If a wallet is not supported on a given platform (eg. server-rendering, or
     * mobile) then it will stay in the `Unsupported` state.
     */
    WalletReadyState["Unsupported"] = "Unsupported";
})(WalletReadyState = exports.WalletReadyState || (exports.WalletReadyState = {}));
class BaseWalletAdapter extends eventemitter3_1.default {
    get connected() {
        return !!this.publicKey;
    }
}
exports.BaseWalletAdapter = BaseWalletAdapter;
function scopePollingDetectionStrategy(detect) {
    // Early return when server-side rendering
    if (typeof window === 'undefined' || typeof document === 'undefined')
        return;
    const disposers = [];
    function detectAndDispose() {
        const detected = detect();
        if (detected) {
            for (const dispose of disposers) {
                dispose();
            }
        }
    }
    // Strategy #1: Try detecting every second.
    const interval = 
    // TODO: #334 Replace with idle callback strategy.
    setInterval(detectAndDispose, 1000);
    disposers.push(() => clearInterval(interval));
    // Strategy #2: Detect as soon as the DOM becomes 'ready'/'interactive'.
    if (
    // Implies that `DOMContentLoaded` has not yet fired.
    document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectAndDispose, { once: true });
        disposers.push(() => document.removeEventListener('DOMContentLoaded', detectAndDispose));
    }
    // Strategy #3: Detect after the `window` has fully loaded.
    if (
    // If the `complete` state has been reached, we're too late.
    document.readyState !== 'complete') {
        window.addEventListener('load', detectAndDispose, { once: true });
        disposers.push(() => window.removeEventListener('load', detectAndDispose));
    }
    // Strategy #4: Detect synchronously, now.
    detectAndDispose();
}
exports.scopePollingDetectionStrategy = scopePollingDetectionStrategy;
//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/deployment.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/deployment.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deployment = void 0;
class Deployment {
    address;
    chainId;
    program;
    fee;
    feePrivate;
    constructor(address, chainId, program, fee, feePrivate = true) {
        this.address = address;
        this.chainId = chainId;
        this.program = program;
        this.fee = fee;
        this.feePrivate = feePrivate;
    }
}
exports.Deployment = Deployment;
//# sourceMappingURL=deployment.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletTransactionError = exports.WalletRecordsError = exports.WalletDecryptionError = exports.WalletDecryptionNotAllowedError = exports.WalletWindowClosedError = exports.WalletWindowBlockedError = exports.WalletTimeoutError = exports.WalletSignTransactionError = exports.WalletSignMessageError = exports.WalletSendTransactionError = exports.WalletNotConnectedError = exports.WalletKeypairError = exports.WalletPublicKeyError = exports.WalletAccountError = exports.WalletDisconnectionError = exports.WalletDisconnectedError = exports.WalletNotSelectedError = exports.WalletConnectionError = exports.WalletConfigError = exports.WalletLoadError = exports.WalletNotReadyError = exports.WalletError = void 0;
class WalletError extends Error {
    error;
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
exports.WalletError = WalletError;
class WalletNotReadyError extends WalletError {
    name = 'WalletNotReadyError';
}
exports.WalletNotReadyError = WalletNotReadyError;
class WalletLoadError extends WalletError {
    name = 'WalletLoadError';
}
exports.WalletLoadError = WalletLoadError;
class WalletConfigError extends WalletError {
    name = 'WalletConfigError';
}
exports.WalletConfigError = WalletConfigError;
class WalletConnectionError extends WalletError {
    name = 'WalletConnectionError';
}
exports.WalletConnectionError = WalletConnectionError;
class WalletNotSelectedError extends WalletError {
    name = 'WalletNotSelectedError';
}
exports.WalletNotSelectedError = WalletNotSelectedError;
class WalletDisconnectedError extends WalletError {
    name = 'WalletDisconnectedError';
}
exports.WalletDisconnectedError = WalletDisconnectedError;
class WalletDisconnectionError extends WalletError {
    name = 'WalletDisconnectionError';
}
exports.WalletDisconnectionError = WalletDisconnectionError;
class WalletAccountError extends WalletError {
    name = 'WalletAccountError';
}
exports.WalletAccountError = WalletAccountError;
class WalletPublicKeyError extends WalletError {
    name = 'WalletPublicKeyError';
}
exports.WalletPublicKeyError = WalletPublicKeyError;
class WalletKeypairError extends WalletError {
    name = 'WalletKeypairError';
}
exports.WalletKeypairError = WalletKeypairError;
class WalletNotConnectedError extends WalletError {
    name = 'WalletNotConnectedError';
}
exports.WalletNotConnectedError = WalletNotConnectedError;
class WalletSendTransactionError extends WalletError {
    name = 'WalletSendTransactionError';
}
exports.WalletSendTransactionError = WalletSendTransactionError;
class WalletSignMessageError extends WalletError {
    name = 'WalletSignMessageError';
}
exports.WalletSignMessageError = WalletSignMessageError;
class WalletSignTransactionError extends WalletError {
    name = 'WalletSignTransactionError';
}
exports.WalletSignTransactionError = WalletSignTransactionError;
class WalletTimeoutError extends WalletError {
    name = 'WalletTimeoutError';
}
exports.WalletTimeoutError = WalletTimeoutError;
class WalletWindowBlockedError extends WalletError {
    name = 'WalletWindowBlockedError';
}
exports.WalletWindowBlockedError = WalletWindowBlockedError;
class WalletWindowClosedError extends WalletError {
    name = 'WalletWindowClosedError';
}
exports.WalletWindowClosedError = WalletWindowClosedError;
class WalletDecryptionNotAllowedError extends WalletError {
    name = 'WalletDecryptionNotAllowedError';
}
exports.WalletDecryptionNotAllowedError = WalletDecryptionNotAllowedError;
class WalletDecryptionError extends WalletError {
    name = 'WalletDecryptionError';
}
exports.WalletDecryptionError = WalletDecryptionError;
class WalletRecordsError extends WalletError {
    name = 'WalletRecordsError';
}
exports.WalletRecordsError = WalletRecordsError;
class WalletTransactionError extends WalletError {
    name = 'WalletTransactionError';
}
exports.WalletTransactionError = WalletTransactionError;
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./adapter */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js"), exports);
__exportStar(__webpack_require__(/*! ./errors */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/errors.js"), exports);
__exportStar(__webpack_require__(/*! ./signer */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js"), exports);
__exportStar(__webpack_require__(/*! ./transaction */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/transaction.js"), exports);
__exportStar(__webpack_require__(/*! ./deployment */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/deployment.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/signer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMessageSignerWalletAdapter = exports.BaseSignerWalletAdapter = void 0;
const adapter_1 = __webpack_require__(/*! ./adapter */ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/adapter.js");
class BaseSignerWalletAdapter extends adapter_1.BaseWalletAdapter {
}
exports.BaseSignerWalletAdapter = BaseSignerWalletAdapter;
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {
}
exports.BaseMessageSignerWalletAdapter = BaseMessageSignerWalletAdapter;
//# sourceMappingURL=signer.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/transaction.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/transaction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transaction = exports.Transition = void 0;
class Transition {
    program;
    functionName;
    inputs;
    constructor(program, functionName, inputs) {
        this.program = program;
        this.functionName = functionName;
        this.inputs = inputs;
    }
}
exports.Transition = Transition;
class Transaction {
    address;
    chainId;
    transitions;
    fee;
    feePrivate;
    constructor(address, chainId, transitions, fee, feePrivate = true) {
        this.address = address;
        this.chainId = chainId;
        this.transitions = transitions;
        this.fee = fee;
        this.feePrivate = feePrivate;
    }
    static createTransaction(address, chainId, program, functionName, inputs, fee, feePrivate = true) {
        const transition = new Transition(program, functionName, inputs);
        return new Transaction(address, chainId, [transition], fee, feePrivate);
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@demox-labs/aleo-wallet-adapter-base/dist/types.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DecryptPermission = exports.WalletAdapterNetwork = void 0;
var WalletAdapterNetwork;
(function (WalletAdapterNetwork) {
    WalletAdapterNetwork["Testnet"] = "testnet3";
    WalletAdapterNetwork["TestnetBeta"] = "testnetbeta";
    WalletAdapterNetwork["MainnetBeta"] = "mainnetbeta";
})(WalletAdapterNetwork = exports.WalletAdapterNetwork || (exports.WalletAdapterNetwork = {}));
;
var DecryptPermission;
(function (DecryptPermission) {
    DecryptPermission["NoDecrypt"] = "NO_DECRYPT";
    DecryptPermission["UponRequest"] = "DECRYPT_UPON_REQUEST";
    DecryptPermission["AutoDecrypt"] = "AUTO_DECRYPT";
    DecryptPermission["OnChainHistory"] = "ON_CHAIN_HISTORY"; // The App can request on-chain record plaintexts and transaction ids
})(DecryptPermission = exports.DecryptPermission || (exports.DecryptPermission = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/***/ ((module) => {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeoWalletAdapter: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.LeoWalletAdapter),
/* harmony export */   LeoWalletName: () => (/* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.LeoWalletName)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./adapter.ts");


})();

const __webpack_exports__LeoWalletAdapter = __webpack_exports__.LeoWalletAdapter;
const __webpack_exports__LeoWalletName = __webpack_exports__.LeoWalletName;
export { __webpack_exports__LeoWalletAdapter as LeoWalletAdapter, __webpack_exports__LeoWalletName as LeoWalletName };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQTZCO0FBQ2pDO0FBQ0E7Ozs7Ozs7U0MvVUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGlDQUFpQyxXQUFXO1VBQzVDO1VBQ0EsRTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBLEU7Ozs7O1VDUEEsd0Y7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3QvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC9kZXBsb3ltZW50LmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vbm9kZV9tb2R1bGVzL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9kaXN0L2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby8uL25vZGVfbW9kdWxlcy9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UvZGlzdC9zaWduZXIuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3QvdHJhbnNhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1iYXNlL2Rpc3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvYWxlby13YWxsZXQtYWRhcHRlci1sZW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWxlby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BkZW1veC1sYWJzL2FsZW8td2FsbGV0LWFkYXB0ZXItbGVvLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5LFxuICAgIFdhbGxldENvbm5lY3Rpb25FcnJvcixcbiAgICBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IsXG4gICAgV2FsbGV0TmFtZSxcbiAgICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcbiAgICBXYWxsZXROb3RSZWFkeUVycm9yLFxuICAgIFdhbGxldFJlYWR5U3RhdGUsXG4gICAgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IsXG4gICAgV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvcixcbiAgICBXYWxsZXREZWNyeXB0aW9uRXJyb3IsXG4gICAgV2FsbGV0UmVjb3Jkc0Vycm9yLFxuICAgIERlY3J5cHRQZXJtaXNzaW9uLFxuICAgIFdhbGxldEFkYXB0ZXJOZXR3b3JrLFxuICAgIEFsZW9UcmFuc2FjdGlvbixcbiAgICBBbGVvRGVwbG95bWVudCxcbiAgICBXYWxsZXRUcmFuc2FjdGlvbkVycm9yLFxufSBmcm9tICdAZGVtb3gtbGFicy9hbGVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExlb1dhbGxldEV2ZW50cyB7XG4gICAgY29ubmVjdCguLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duO1xuICAgIGRpc2Nvbm5lY3QoLi4uYXJnczogdW5rbm93bltdKTogdW5rbm93bjtcbiAgICBhY2NvdW50Q2hhbmdlKC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVvV2FsbGV0IGV4dGVuZHMgRXZlbnRFbWl0dGVyPExlb1dhbGxldEV2ZW50cz4ge1xuICAgIHB1YmxpY0tleT86IHN0cmluZztcbiAgICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHNpZ25NZXNzYWdlKG1lc3NhZ2U6IFVpbnQ4QXJyYXkpOiBQcm9taXNlPHsgc2lnbmF0dXJlOiBVaW50OEFycmF5IH0+O1xuICAgIGRlY3J5cHQoY2lwaGVyVGV4dDogc3RyaW5nLCB0cGs/OiBzdHJpbmcsIHByb2dyYW1JZD86IHN0cmluZywgZnVuY3Rpb25OYW1lPzogc3RyaW5nLCBpbmRleD86IG51bWJlcik6IFByb21pc2U8eyB0ZXh0OiBzdHJpbmcgfT4sXG4gICAgcmVxdWVzdFJlY29yZHMocHJvZ3JhbTogc3RyaW5nKTogUHJvbWlzZTx7IHJlY29yZHM6IGFueVtdIH0+LFxuICAgIHJlcXVlc3RUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogQWxlb1RyYW5zYWN0aW9uKTogUHJvbWlzZTx7IHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmd9PixcbiAgICByZXF1ZXN0RXhlY3V0aW9uKHRyYW5zYWN0aW9uOiBBbGVvVHJhbnNhY3Rpb24pOiBQcm9taXNlPHsgdHJhbnNhY3Rpb25JZD86IHN0cmluZ30+LFxuICAgIHJlcXVlc3RCdWxrVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9uczogQWxlb1RyYW5zYWN0aW9uW10pOiBQcm9taXNlPHsgdHJhbnNhY3Rpb25JZHM/OiBzdHJpbmdbXSB9PixcbiAgICByZXF1ZXN0RGVwbG95KGRlcGxveW1lbnQ6IEFsZW9EZXBsb3ltZW50KTogUHJvbWlzZTx7IHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmd9PixcbiAgICB0cmFuc2FjdGlvblN0YXR1cyh0cmFuc2FjdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmcgfT4sXG4gICAgdHJhbnNpdGlvblZpZXdLZXlzKHRyYW5zYWN0aW9uSWQ6IHN0cmluZyk6IFByb21pc2U8eyB2aWV3S2V5cz86IHN0cmluZ1tdIH0+LFxuICAgIGdldEV4ZWN1dGlvbih0cmFuc2FjdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPHsgZXhlY3V0aW9uOiBzdHJpbmcgfT4sXG4gICAgcmVxdWVzdFJlY29yZFBsYWludGV4dHMocHJvZ3JhbTogc3RyaW5nKTogUHJvbWlzZTx7IHJlY29yZHM6IGFueVtdIH0+LFxuICAgIHJlcXVlc3RUcmFuc2FjdGlvbkhpc3RvcnkocHJvZ3JhbTogc3RyaW5nKTogUHJvbWlzZTx7IHRyYW5zYWN0aW9uczogYW55W10gfT4sXG4gICAgY29ubmVjdChkZWNyeXB0UGVybWlzc2lvbjogRGVjcnlwdFBlcm1pc3Npb24sIG5ldHdvcms6IFdhbGxldEFkYXB0ZXJOZXR3b3JrLCBwcm9ncmFtcz86IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPjtcbiAgICBkaXNjb25uZWN0KCk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVvV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgICBsZW9XYWxsZXQ/OiBMZW9XYWxsZXQ7XG4gICAgbGVvPzogTGVvV2FsbGV0O1xufVxuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogTGVvV2luZG93O1xuXG5leHBvcnQgaW50ZXJmYWNlIExlb1dhbGxldEFkYXB0ZXJDb25maWcge1xuICAgIGFwcE5hbWU/OiBzdHJpbmdcbiAgICBpc01vYmlsZT86IGJvb2xlYW5cbiAgICBtb2JpbGVXZWJ2aWV3VXJsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBMZW9XYWxsZXROYW1lID0gJ0xlbyBXYWxsZXQnIGFzIFdhbGxldE5hbWU8J0xlbyBXYWxsZXQnPjtcblxuZXhwb3J0IGNsYXNzIExlb1dhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIge1xuICAgIG5hbWUgPSBMZW9XYWxsZXROYW1lO1xuICAgIGljb24gPVxuICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FJQUFBQk1YUGFjQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURrdU1DMWpNREF3SURjNUxqRTNNV015TjJaaFlpd2dNakF5TWk4d09DOHhOaTB5TWpvek5UbzBNU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREkwTGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qSkVSakkxTjBNM05VRkVSakV4UlVRNE9Ua3lSRGt3TmpRd09ERkdNalV3SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pKRVJqSTFOME00TlVGRVJqRXhSVVE0T1RreVJEa3dOalF3T0RGR01qVXdJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TWtSR01qVTNRelUxUVVSR01URkZSRGc1T1RKRU9UQTJOREE0TVVZeU5UQWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNa1JHTWpVM1F6WTFRVVJHTVRGRlJEZzVPVEpFT1RBMk5EQTRNVVl5TlRBaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N1p5TTU5QUFBQ3owbEVRVlI0MnV6ZFQydlRZQURIOGQrVHBvM29ZZXBoNGc0aUU2Ym9aVjY4aWRLRGlIajFzcHQ3QllMNERnVGZnS0RnVGR4WnI0SlhENExDUk1HTGdodFVHUGdIcGJXbWFSdVRzV09UT3Bma3laNSt2K3hXbHJUNWRFK2V3SlBGckxSamtiMDhEZ0VBQUJBQUFCQUFBRkQxK1RtdnhiRkdRNVZ4bWRCb3lNdW1UM1k2ZHVqaXhQZGx6TzRCa3FQdk56Vi9QTytYLzd2dUwvVzZrN2VjN1Bmb3ZJTEFIWUFmM3pRSU13OWpKc0J3cUdNTHV2Y29CU3k4dFlkNnRxYURoeWE4RkEyMGVrdkxGOXdCdUh0Yjc5OG9PTEQ3SVNoQmF3VjVZOFZlaHFDY21zMzBqOCtkMDZ5M2g1UHdlRnpLZTRwakN6dTFWZjZIWlJiRU5CUUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQW1nR0FyR1dVVHViWDdRMDFmRDEvcXZWWFUxYjBGVnMwMEtrenVuZ0ZnTzExdXk5ZmFEU3FkS2Y5bnRyWEFiQTNCQmxqYmR6akpNeEpHQUFDQUFBQ1lEYXI0elEwdVN3cTR6WXg0Nm5WQW1CYXcwZzNWclY0dXZndGIzWDA1TUhPckIrQXpKTHYvdGxsblR0Zi9KYS9iTzRBY0E2WTBpQXNaYlBoSDA3Q0JBQUFCQUFBQkFBQUJBQUFCQUFBQUJBQUFCQUFBQkFBQUJBQUFCQUFBQkFBQUJBQUFGaXBwTWRuTkZ0MUJLamQybEJqMGtXY2M0Y0xmbnFUa1RvYkFQemI5L1R4L1JKMUFaaGVlYmRvQTdCZkR4T3pJQUFJQUFBSUFPZXlNd3VLSXZWL3k2dDJ0bU84T3Y0cktEc0FpMHU2ZExYU3c1Rlk5N3I2OEJhQTdTNWZTMzhxcnJPaE96ZHJkNTB4UStlQWt1NStCWUJaRUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUd3cndCY3VsdW9ucC9GeTMvSGpZWkQzN1hjejJJOE8vQm1wVDM1bnNRNFZoRG81Skk3ZndSaFg1OC9UbjVwUE5iY0VTMmNLR1cvbTUvU2hkbGVCckNmNHhhR2V2ZmFvU0VvK3pGV3lkSDUrVjFmdDByWmI3T1ZlZlNWdnp6ZDRrTmVyUXhRZ1kzeGxsa1EwMUFBQ0FBQUNBQUF5RUovQlJnQUpwaDVJUDFYRnB3QUFBQUFTVVZPUks1Q1lJST0nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHN1cHBvcnRlZFRyYW5zYWN0aW9uVmVyc2lvbnMgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfY29ubmVjdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF93YWxsZXQ6IExlb1dhbGxldCB8IG51bGw7XG4gICAgcHJpdmF0ZSBfcHVibGljS2V5OiBzdHJpbmcgfCBudWxsO1xuICAgIHByaXZhdGUgX2RlY3J5cHRQZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcmVhZHlTdGF0ZTogV2FsbGV0UmVhZHlTdGF0ZSA9XG4gICAgICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gV2FsbGV0UmVhZHlTdGF0ZS5VbnN1cHBvcnRlZFxuICAgICAgICAgICAgOiBXYWxsZXRSZWFkeVN0YXRlLk5vdERldGVjdGVkO1xuXG4gICAgY29uc3RydWN0b3IoeyBhcHBOYW1lID0gJ3NhbXBsZScsIGlzTW9iaWxlID0gZmFsc2UsIG1vYmlsZVdlYnZpZXdVcmx9IDogTGVvV2FsbGV0QWRhcHRlckNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGVjcnlwdFBlcm1pc3Npb24gPSBEZWNyeXB0UGVybWlzc2lvbi5Ob0RlY3J5cHQ7XG4gICAgICAgIHRoaXMudXJsID0gaXNNb2JpbGUgPyBgaHR0cHM6Ly9hcHAubGVvLmFwcC9icm93c2VyP3VybD0ke21vYmlsZVdlYnZpZXdVcmx9YDogJ2h0dHBzOi8vYXBwLmxlby5hcHAnXG5cbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Py5sZW9XYWxsZXQgfHwgd2luZG93Py5sZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZHlTdGF0ZSA9IFdhbGxldFJlYWR5U3RhdGUuSW5zdGFsbGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlYWR5U3RhdGVDaGFuZ2UnLCB0aGlzLl9yZWFkeVN0YXRlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBXYWtldXAgc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdz8ubGVvV2FsbGV0ICYmIHdpbmRvdz8ubGVvV2FsbGV0LmlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3c/Lmxlb1dhbGxldC5pc0F2YWlsYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwdWJsaWNLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdWJsaWNLZXk7XG4gICAgfVxuXG4gICAgZ2V0IGRlY3J5cHRQZXJtaXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVjcnlwdFBlcm1pc3Npb247XG4gICAgfVxuXG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cblxuICAgIGdldCByZWFkeVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgcmVhZHlTdGF0ZShyZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY3J5cHQoY2lwaGVyVGV4dDogc3RyaW5nLCB0cGs/OiBzdHJpbmcsIHByb2dyYW1JZD86IHN0cmluZywgZnVuY3Rpb25OYW1lPzogc3RyaW5nLCBpbmRleD86IG51bWJlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fZGVjcnlwdFBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIERlY3J5cHRQZXJtaXNzaW9uLk5vRGVjcnlwdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldERlY3J5cHRpb25Ob3RBbGxvd2VkRXJyb3IoKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgRGVjcnlwdFBlcm1pc3Npb24uVXBvblJlcXVlc3Q6XG4gICAgICAgICAgICAgICAgY2FzZSBEZWNyeXB0UGVybWlzc2lvbi5BdXRvRGVjcnlwdDpcbiAgICAgICAgICAgICAgICBjYXNlIERlY3J5cHRQZXJtaXNzaW9uLk9uQ2hhaW5IaXN0b3J5OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCB3YWxsZXQuZGVjcnlwdChjaXBoZXJUZXh0LCB0cGssIHByb2dyYW1JZCwgZnVuY3Rpb25OYW1lLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0RGVjcnlwdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldERlY3J5cHRpb25FcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UmVjb3Jkcyhwcm9ncmFtOiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0UmVjb3Jkcyhwcm9ncmFtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlY29yZHM7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFJlY29yZHNFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IEFsZW9UcmFuc2FjdGlvbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXQucmVxdWVzdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRyYW5zYWN0aW9uSWQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdEV4ZWN1dGlvbih0cmFuc2FjdGlvbjogQWxlb1RyYW5zYWN0aW9uKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0RXhlY3V0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRyYW5zYWN0aW9uSWQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdEJ1bGtUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zOiBBbGVvVHJhbnNhY3Rpb25bXSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0QnVsa1RyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudHJhbnNhY3Rpb25JZHM7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdERlcGxveShkZXBsb3ltZW50OiBBbGVvRGVwbG95bWVudCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXQucmVxdWVzdERlcGxveShkZXBsb3ltZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRyYW5zYWN0aW9uSWQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFRyYW5zYWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhbnNhY3Rpb25TdGF0dXModHJhbnNhY3Rpb25JZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC50cmFuc2FjdGlvblN0YXR1cyh0cmFuc2FjdGlvbklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN0YXR1cztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0VHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB0cmFuc2l0aW9uVmlld0tleXModHJhbnNhY3Rpb25JZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LnRyYW5zaXRpb25WaWV3S2V5cyh0cmFuc2FjdGlvbklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnZpZXdLZXlzO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRUcmFuc2FjdGlvbkVycm9yKGVycm9yPy5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEV4ZWN1dGlvbih0cmFuc2FjdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKCF3YWxsZXQgfHwgIXRoaXMucHVibGljS2V5KSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LmdldEV4ZWN1dGlvbih0cmFuc2FjdGlvbklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmV4ZWN1dGlvbjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0VHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0UmVjb3JkUGxhaW50ZXh0cyhwcm9ncmFtOiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAoIXdhbGxldCB8fCAhdGhpcy5wdWJsaWNLZXkpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdhbGxldC5yZXF1ZXN0UmVjb3JkUGxhaW50ZXh0cyhwcm9ncmFtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnJlY29yZHM7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFJlY29yZHNFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyByZXF1ZXN0VHJhbnNhY3Rpb25IaXN0b3J5KHByb2dyYW06IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2FsbGV0LnJlcXVlc3RUcmFuc2FjdGlvbkhpc3RvcnkocHJvZ3JhbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50cmFuc2FjdGlvbnM7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFJlY29yZHNFcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjb25uZWN0KGRlY3J5cHRQZXJtaXNzaW9uOiBEZWNyeXB0UGVybWlzc2lvbiwgbmV0d29yazogV2FsbGV0QWRhcHRlck5ldHdvcmssIHByb2dyYW1zPzogc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeVN0YXRlICE9PSBXYWxsZXRSZWFkeVN0YXRlLkluc3RhbGxlZCkgdGhyb3cgbmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKTtcblxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB3aW5kb3cubGVvV2FsbGV0ISB8fCB3aW5kb3cubGVvITtcbiAgICAgICAgICAgIGNvbnN0IGlzQXZhaWxhYmxlID0gd2FsbGV0LmlzQXZhaWxhYmxlID8gYXdhaXQgd2FsbGV0LmlzQXZhaWxhYmxlKCkgOiB0cnVlO1xuICAgICAgICAgICAgaWYgKCFpc0F2YWlsYWJsZSkgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcignVGhlIHdhbGxldCBpcyBub3QgYXZhaWxhYmxlJyk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2FsbGV0LmNvbm5lY3QoZGVjcnlwdFBlcm1pc3Npb24sIG5ldHdvcmssIHByb2dyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldD8ucHVibGljS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gd2FsbGV0LnB1YmxpY0tleSE7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl93YWxsZXQgPSB3YWxsZXQ7XG4gICAgICAgICAgICB0aGlzLl9kZWNyeXB0UGVybWlzc2lvbiA9IGRlY3J5cHRQZXJtaXNzaW9uO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0JywgdGhpcy5fcHVibGljS2V5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICAvLyB3YWxsZXQub2ZmKCdkaXNjb25uZWN0JywgdGhpcy5fZGlzY29ubmVjdGVkKTtcblxuICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2FsbGV0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcpO1xuICAgIH1cblxuICAgIGFzeW5jIHNpZ25NZXNzYWdlKG1lc3NhZ2U6IFVpbnQ4QXJyYXkpOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgd2FsbGV0LnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduYXR1cmUuc2lnbmF0dXJlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5ID0gZXhwb3J0cy5CYXNlV2FsbGV0QWRhcHRlciA9IGV4cG9ydHMuV2FsbGV0UmVhZHlTdGF0ZSA9IGV4cG9ydHMuRXZlbnRFbWl0dGVyID0gdm9pZCAwO1xuY29uc3QgZXZlbnRlbWl0dGVyM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpKTtcbmV4cG9ydHMuRXZlbnRFbWl0dGVyID0gZXZlbnRlbWl0dGVyM18xLmRlZmF1bHQ7XG4vKipcbiAqIEEgd2FsbGV0J3MgcmVhZGluZXNzIGRlc2NyaWJlcyBhIHNlcmllcyBvZiBzdGF0ZXMgdGhhdCB0aGUgd2FsbGV0IGNhbiBiZSBpbixcbiAqIGRlcGVuZGluZyBvbiB3aGF0IGtpbmQgb2Ygd2FsbGV0IGl0IGlzLiBBbiBpbnN0YWxsYWJsZSB3YWxsZXQgKGVnLiBhIGJyb3dzZXJcbiAqIGV4dGVuc2lvbiBsaWtlIFBoYW50b20pIG1pZ2h0IGJlIGBJbnN0YWxsZWRgIGlmIHdlJ3ZlIGZvdW5kIHRoZSBQaGFudG9tIEFQSVxuICogaW4gdGhlIGdsb2JhbCBzY29wZSwgb3IgYE5vdERldGVjdGVkYCBvdGhlcndpc2UuIEEgbG9hZGFibGUsIHplcm8taW5zdGFsbFxuICogcnVudGltZSAoZWcuIFRvcnVzIFdhbGxldCkgbWlnaHQgc2ltcGx5IHNpZ25hbCB0aGF0IGl0J3MgYExvYWRhYmxlYC4gVXNlIHRoaXNcbiAqIG1ldGFkYXRhIHRvIHBlcnNvbmFsaXplIHRoZSB3YWxsZXQgbGlzdCBmb3IgZWFjaCB1c2VyIChlZy4gdG8gc2hvdyB0aGVpclxuICogaW5zdGFsbGVkIHdhbGxldHMgZmlyc3QpLlxuICovXG52YXIgV2FsbGV0UmVhZHlTdGF0ZTtcbihmdW5jdGlvbiAoV2FsbGV0UmVhZHlTdGF0ZSkge1xuICAgIC8qKlxuICAgICAqIFVzZXItaW5zdGFsbGFibGUgd2FsbGV0cyBjYW4gdHlwaWNhbGx5IGJlIGRldGVjdGVkIGJ5IHNjYW5uaW5nIGZvciBhbiBBUElcbiAgICAgKiB0aGF0IHRoZXkndmUgaW5qZWN0ZWQgaW50byB0aGUgZ2xvYmFsIGNvbnRleHQuIElmIHN1Y2ggYW4gQVBJIGlzIHByZXNlbnQsXG4gICAgICogd2UgY29uc2lkZXIgdGhlIHdhbGxldCB0byBoYXZlIGJlZW4gaW5zdGFsbGVkLlxuICAgICAqL1xuICAgIFdhbGxldFJlYWR5U3RhdGVbXCJJbnN0YWxsZWRcIl0gPSBcIkluc3RhbGxlZFwiO1xuICAgIFdhbGxldFJlYWR5U3RhdGVbXCJOb3REZXRlY3RlZFwiXSA9IFwiTm90RGV0ZWN0ZWRcIjtcbiAgICAvKipcbiAgICAgKiBMb2FkYWJsZSB3YWxsZXRzIGFyZSBhbHdheXMgYXZhaWxhYmxlIHRvIHlvdS4gU2luY2UgeW91IGNhbiBsb2FkIHRoZW0gYXRcbiAgICAgKiBhbnkgdGltZSwgaXQncyBtZWFuaW5nbGVzcyB0byBzYXkgdGhhdCB0aGV5IGhhdmUgYmVlbiBkZXRlY3RlZC5cbiAgICAgKi9cbiAgICBXYWxsZXRSZWFkeVN0YXRlW1wiTG9hZGFibGVcIl0gPSBcIkxvYWRhYmxlXCI7XG4gICAgLyoqXG4gICAgICogSWYgYSB3YWxsZXQgaXMgbm90IHN1cHBvcnRlZCBvbiBhIGdpdmVuIHBsYXRmb3JtIChlZy4gc2VydmVyLXJlbmRlcmluZywgb3JcbiAgICAgKiBtb2JpbGUpIHRoZW4gaXQgd2lsbCBzdGF5IGluIHRoZSBgVW5zdXBwb3J0ZWRgIHN0YXRlLlxuICAgICAqL1xuICAgIFdhbGxldFJlYWR5U3RhdGVbXCJVbnN1cHBvcnRlZFwiXSA9IFwiVW5zdXBwb3J0ZWRcIjtcbn0pKFdhbGxldFJlYWR5U3RhdGUgPSBleHBvcnRzLldhbGxldFJlYWR5U3RhdGUgfHwgKGV4cG9ydHMuV2FsbGV0UmVhZHlTdGF0ZSA9IHt9KSk7XG5jbGFzcyBCYXNlV2FsbGV0QWRhcHRlciBleHRlbmRzIGV2ZW50ZW1pdHRlcjNfMS5kZWZhdWx0IHtcbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnB1YmxpY0tleTtcbiAgICB9XG59XG5leHBvcnRzLkJhc2VXYWxsZXRBZGFwdGVyID0gQmFzZVdhbGxldEFkYXB0ZXI7XG5mdW5jdGlvbiBzY29wZVBvbGxpbmdEZXRlY3Rpb25TdHJhdGVneShkZXRlY3QpIHtcbiAgICAvLyBFYXJseSByZXR1cm4gd2hlbiBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRpc3Bvc2VycyA9IFtdO1xuICAgIGZ1bmN0aW9uIGRldGVjdEFuZERpc3Bvc2UoKSB7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkID0gZGV0ZWN0KCk7XG4gICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXNwb3NlIG9mIGRpc3Bvc2Vycykge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTdHJhdGVneSAjMTogVHJ5IGRldGVjdGluZyBldmVyeSBzZWNvbmQuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBcbiAgICAvLyBUT0RPOiAjMzM0IFJlcGxhY2Ugd2l0aCBpZGxlIGNhbGxiYWNrIHN0cmF0ZWd5LlxuICAgIHNldEludGVydmFsKGRldGVjdEFuZERpc3Bvc2UsIDEwMDApO1xuICAgIGRpc3Bvc2Vycy5wdXNoKCgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpKTtcbiAgICAvLyBTdHJhdGVneSAjMjogRGV0ZWN0IGFzIHNvb24gYXMgdGhlIERPTSBiZWNvbWVzICdyZWFkeScvJ2ludGVyYWN0aXZlJy5cbiAgICBpZiAoXG4gICAgLy8gSW1wbGllcyB0aGF0IGBET01Db250ZW50TG9hZGVkYCBoYXMgbm90IHlldCBmaXJlZC5cbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRldGVjdEFuZERpc3Bvc2UsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgZGlzcG9zZXJzLnB1c2goKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRldGVjdEFuZERpc3Bvc2UpKTtcbiAgICB9XG4gICAgLy8gU3RyYXRlZ3kgIzM6IERldGVjdCBhZnRlciB0aGUgYHdpbmRvd2AgaGFzIGZ1bGx5IGxvYWRlZC5cbiAgICBpZiAoXG4gICAgLy8gSWYgdGhlIGBjb21wbGV0ZWAgc3RhdGUgaGFzIGJlZW4gcmVhY2hlZCwgd2UncmUgdG9vIGxhdGUuXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRldGVjdEFuZERpc3Bvc2UsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgZGlzcG9zZXJzLnB1c2goKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkZXRlY3RBbmREaXNwb3NlKSk7XG4gICAgfVxuICAgIC8vIFN0cmF0ZWd5ICM0OiBEZXRlY3Qgc3luY2hyb25vdXNseSwgbm93LlxuICAgIGRldGVjdEFuZERpc3Bvc2UoKTtcbn1cbmV4cG9ydHMuc2NvcGVQb2xsaW5nRGV0ZWN0aW9uU3RyYXRlZ3kgPSBzY29wZVBvbGxpbmdEZXRlY3Rpb25TdHJhdGVneTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlcGxveW1lbnQgPSB2b2lkIDA7XG5jbGFzcyBEZXBsb3ltZW50IHtcbiAgICBhZGRyZXNzO1xuICAgIGNoYWluSWQ7XG4gICAgcHJvZ3JhbTtcbiAgICBmZWU7XG4gICAgZmVlUHJpdmF0ZTtcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzLCBjaGFpbklkLCBwcm9ncmFtLCBmZWUsIGZlZVByaXZhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMuZmVlID0gZmVlO1xuICAgICAgICB0aGlzLmZlZVByaXZhdGUgPSBmZWVQcml2YXRlO1xuICAgIH1cbn1cbmV4cG9ydHMuRGVwbG95bWVudCA9IERlcGxveW1lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXBsb3ltZW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XYWxsZXRUcmFuc2FjdGlvbkVycm9yID0gZXhwb3J0cy5XYWxsZXRSZWNvcmRzRXJyb3IgPSBleHBvcnRzLldhbGxldERlY3J5cHRpb25FcnJvciA9IGV4cG9ydHMuV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvciA9IGV4cG9ydHMuV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IgPSBleHBvcnRzLldhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciA9IGV4cG9ydHMuV2FsbGV0VGltZW91dEVycm9yID0gZXhwb3J0cy5XYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciA9IGV4cG9ydHMuV2FsbGV0U2lnbk1lc3NhZ2VFcnJvciA9IGV4cG9ydHMuV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3IgPSBleHBvcnRzLldhbGxldE5vdENvbm5lY3RlZEVycm9yID0gZXhwb3J0cy5XYWxsZXRLZXlwYWlyRXJyb3IgPSBleHBvcnRzLldhbGxldFB1YmxpY0tleUVycm9yID0gZXhwb3J0cy5XYWxsZXRBY2NvdW50RXJyb3IgPSBleHBvcnRzLldhbGxldERpc2Nvbm5lY3Rpb25FcnJvciA9IGV4cG9ydHMuV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IgPSBleHBvcnRzLldhbGxldE5vdFNlbGVjdGVkRXJyb3IgPSBleHBvcnRzLldhbGxldENvbm5lY3Rpb25FcnJvciA9IGV4cG9ydHMuV2FsbGV0Q29uZmlnRXJyb3IgPSBleHBvcnRzLldhbGxldExvYWRFcnJvciA9IGV4cG9ydHMuV2FsbGV0Tm90UmVhZHlFcnJvciA9IGV4cG9ydHMuV2FsbGV0RXJyb3IgPSB2b2lkIDA7XG5jbGFzcyBXYWxsZXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBlcnJvcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0cy5XYWxsZXRFcnJvciA9IFdhbGxldEVycm9yO1xuY2xhc3MgV2FsbGV0Tm90UmVhZHlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldE5vdFJlYWR5RXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXROb3RSZWFkeUVycm9yID0gV2FsbGV0Tm90UmVhZHlFcnJvcjtcbmNsYXNzIFdhbGxldExvYWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldExvYWRFcnJvcic7XG59XG5leHBvcnRzLldhbGxldExvYWRFcnJvciA9IFdhbGxldExvYWRFcnJvcjtcbmNsYXNzIFdhbGxldENvbmZpZ0Vycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0Q29uZmlnRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXRDb25maWdFcnJvciA9IFdhbGxldENvbmZpZ0Vycm9yO1xuY2xhc3MgV2FsbGV0Q29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0Q29ubmVjdGlvbkVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0Q29ubmVjdGlvbkVycm9yID0gV2FsbGV0Q29ubmVjdGlvbkVycm9yO1xuY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXROb3RTZWxlY3RlZEVycm9yID0gV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcjtcbmNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXREaXNjb25uZWN0ZWRFcnJvciA9IFdhbGxldERpc2Nvbm5lY3RlZEVycm9yO1xuY2xhc3MgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yID0gV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yO1xuY2xhc3MgV2FsbGV0QWNjb3VudEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0QWNjb3VudEVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0QWNjb3VudEVycm9yID0gV2FsbGV0QWNjb3VudEVycm9yO1xuY2xhc3MgV2FsbGV0UHVibGljS2V5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRQdWJsaWNLZXlFcnJvcic7XG59XG5leHBvcnRzLldhbGxldFB1YmxpY0tleUVycm9yID0gV2FsbGV0UHVibGljS2V5RXJyb3I7XG5jbGFzcyBXYWxsZXRLZXlwYWlyRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRLZXlwYWlyRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXRLZXlwYWlyRXJyb3IgPSBXYWxsZXRLZXlwYWlyRXJyb3I7XG5jbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IgPSBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcjtcbmNsYXNzIFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvciA9IFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yO1xuY2xhc3MgV2FsbGV0U2lnbk1lc3NhZ2VFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFNpZ25NZXNzYWdlRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXRTaWduTWVzc2FnZUVycm9yID0gV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcjtcbmNsYXNzIFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciA9IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yO1xuY2xhc3MgV2FsbGV0VGltZW91dEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0VGltZW91dEVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0VGltZW91dEVycm9yID0gV2FsbGV0VGltZW91dEVycm9yO1xuY2xhc3MgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0V2luZG93QmxvY2tlZEVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0V2luZG93QmxvY2tlZEVycm9yID0gV2FsbGV0V2luZG93QmxvY2tlZEVycm9yO1xuY2xhc3MgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRXaW5kb3dDbG9zZWRFcnJvcic7XG59XG5leHBvcnRzLldhbGxldFdpbmRvd0Nsb3NlZEVycm9yID0gV2FsbGV0V2luZG93Q2xvc2VkRXJyb3I7XG5jbGFzcyBXYWxsZXREZWNyeXB0aW9uTm90QWxsb3dlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvcic7XG59XG5leHBvcnRzLldhbGxldERlY3J5cHRpb25Ob3RBbGxvd2VkRXJyb3IgPSBXYWxsZXREZWNyeXB0aW9uTm90QWxsb3dlZEVycm9yO1xuY2xhc3MgV2FsbGV0RGVjcnlwdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGVjcnlwdGlvbkVycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0RGVjcnlwdGlvbkVycm9yID0gV2FsbGV0RGVjcnlwdGlvbkVycm9yO1xuY2xhc3MgV2FsbGV0UmVjb3Jkc0Vycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0UmVjb3Jkc0Vycm9yJztcbn1cbmV4cG9ydHMuV2FsbGV0UmVjb3Jkc0Vycm9yID0gV2FsbGV0UmVjb3Jkc0Vycm9yO1xuY2xhc3MgV2FsbGV0VHJhbnNhY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFRyYW5zYWN0aW9uRXJyb3InO1xufVxuZXhwb3J0cy5XYWxsZXRUcmFuc2FjdGlvbkVycm9yID0gV2FsbGV0VHJhbnNhY3Rpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FkYXB0ZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2Vycm9yc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2lnbmVyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHJhbnNhY3Rpb25cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlcGxveW1lbnRcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciA9IGV4cG9ydHMuQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIgPSB2b2lkIDA7XG5jb25zdCBhZGFwdGVyXzEgPSByZXF1aXJlKFwiLi9hZGFwdGVyXCIpO1xuY2xhc3MgQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIgZXh0ZW5kcyBhZGFwdGVyXzEuQmFzZVdhbGxldEFkYXB0ZXIge1xufVxuZXhwb3J0cy5CYXNlU2lnbmVyV2FsbGV0QWRhcHRlciA9IEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyO1xuY2xhc3MgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIge1xufVxuZXhwb3J0cy5CYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIgPSBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWduZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRyYW5zYWN0aW9uID0gZXhwb3J0cy5UcmFuc2l0aW9uID0gdm9pZCAwO1xuY2xhc3MgVHJhbnNpdGlvbiB7XG4gICAgcHJvZ3JhbTtcbiAgICBmdW5jdGlvbk5hbWU7XG4gICAgaW5wdXRzO1xuICAgIGNvbnN0cnVjdG9yKHByb2dyYW0sIGZ1bmN0aW9uTmFtZSwgaW5wdXRzKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMuZnVuY3Rpb25OYW1lID0gZnVuY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcbiAgICB9XG59XG5leHBvcnRzLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuY2xhc3MgVHJhbnNhY3Rpb24ge1xuICAgIGFkZHJlc3M7XG4gICAgY2hhaW5JZDtcbiAgICB0cmFuc2l0aW9ucztcbiAgICBmZWU7XG4gICAgZmVlUHJpdmF0ZTtcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzLCBjaGFpbklkLCB0cmFuc2l0aW9ucywgZmVlLCBmZWVQcml2YXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBjaGFpbklkO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25zID0gdHJhbnNpdGlvbnM7XG4gICAgICAgIHRoaXMuZmVlID0gZmVlO1xuICAgICAgICB0aGlzLmZlZVByaXZhdGUgPSBmZWVQcml2YXRlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlVHJhbnNhY3Rpb24oYWRkcmVzcywgY2hhaW5JZCwgcHJvZ3JhbSwgZnVuY3Rpb25OYW1lLCBpbnB1dHMsIGZlZSwgZmVlUHJpdmF0ZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHByb2dyYW0sIGZ1bmN0aW9uTmFtZSwgaW5wdXRzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbihhZGRyZXNzLCBjaGFpbklkLCBbdHJhbnNpdGlvbl0sIGZlZSwgZmVlUHJpdmF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNhY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRlY3J5cHRQZXJtaXNzaW9uID0gZXhwb3J0cy5XYWxsZXRBZGFwdGVyTmV0d29yayA9IHZvaWQgMDtcbnZhciBXYWxsZXRBZGFwdGVyTmV0d29yaztcbihmdW5jdGlvbiAoV2FsbGV0QWRhcHRlck5ldHdvcmspIHtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIlRlc3RuZXRcIl0gPSBcInRlc3RuZXQzXCI7XG4gICAgV2FsbGV0QWRhcHRlck5ldHdvcmtbXCJUZXN0bmV0QmV0YVwiXSA9IFwidGVzdG5ldGJldGFcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIk1haW5uZXRCZXRhXCJdID0gXCJtYWlubmV0YmV0YVwiO1xufSkoV2FsbGV0QWRhcHRlck5ldHdvcmsgPSBleHBvcnRzLldhbGxldEFkYXB0ZXJOZXR3b3JrIHx8IChleHBvcnRzLldhbGxldEFkYXB0ZXJOZXR3b3JrID0ge30pKTtcbjtcbnZhciBEZWNyeXB0UGVybWlzc2lvbjtcbihmdW5jdGlvbiAoRGVjcnlwdFBlcm1pc3Npb24pIHtcbiAgICBEZWNyeXB0UGVybWlzc2lvbltcIk5vRGVjcnlwdFwiXSA9IFwiTk9fREVDUllQVFwiO1xuICAgIERlY3J5cHRQZXJtaXNzaW9uW1wiVXBvblJlcXVlc3RcIl0gPSBcIkRFQ1JZUFRfVVBPTl9SRVFVRVNUXCI7XG4gICAgRGVjcnlwdFBlcm1pc3Npb25bXCJBdXRvRGVjcnlwdFwiXSA9IFwiQVVUT19ERUNSWVBUXCI7XG4gICAgRGVjcnlwdFBlcm1pc3Npb25bXCJPbkNoYWluSGlzdG9yeVwiXSA9IFwiT05fQ0hBSU5fSElTVE9SWVwiOyAvLyBUaGUgQXBwIGNhbiByZXF1ZXN0IG9uLWNoYWluIHJlY29yZCBwbGFpbnRleHRzIGFuZCB0cmFuc2FjdGlvbiBpZHNcbn0pKERlY3J5cHRQZXJtaXNzaW9uID0gZXhwb3J0cy5EZWNyeXB0UGVybWlzc2lvbiB8fCAoZXhwb3J0cy5EZWNyeXB0UGVybWlzc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgcHJlZml4ID0gJ34nO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIHN0b3JhZ2UgZm9yIG91ciBgRUVgIG9iamVjdHMuXG4gKiBBbiBgRXZlbnRzYCBpbnN0YW5jZSBpcyBhIHBsYWluIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBldmVudCBuYW1lcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvbmNlPWZhbHNlXSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBFRShmbiwgY29udGV4dCwgb25jZSkge1xuICB0aGlzLmZuID0gZm47XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMub25jZSA9IG9uY2UgfHwgZmFsc2U7XG59XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCBlbWl0dGVyLCBvbmNlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50c1tldnRdKSBlbWl0dGVyLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCBlbWl0dGVyLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gW2VtaXR0ZXIuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIGVtaXR0ZXI7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgYnkgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2dCBUaGUgRXZlbnQgbmFtZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRXZlbnQoZW1pdHRlciwgZXZ0KSB7XG4gIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuXG4vKipcbiAqIE1pbmltYWwgYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlIHRoYXQgaXMgbW9sZGVkIGFnYWluc3QgdGhlIE5vZGUuanNcbiAqIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgbGlzdGluZyB0aGUgZXZlbnRzIGZvciB3aGljaCB0aGUgZW1pdHRlciBoYXMgcmVnaXN0ZXJlZFxuICogbGlzdGVuZXJzLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoZXZlbnQpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnRcbiAgICAsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICBpZiAoaGFuZGxlcnMuZm4pIHJldHVybiBbaGFuZGxlcnMuZm5dO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgbnVtYmVyIG9mIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtYmVyIG9mIGxpc3RlbmVycy5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gbGlzdGVuZXJDb3VudChldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICBpZiAobGlzdGVuZXJzLmZuKSByZXR1cm4gMTtcbiAgcmV0dXJuIGxpc3RlbmVycy5sZW5ndGg7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGV2ZW50IGhhZCBsaXN0ZW5lcnMsIGVsc2UgYGZhbHNlYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF1cbiAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGFyZ3NcbiAgICAsIGk7XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgc3dpdGNoIChsZW4pIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSksIHRydWU7XG4gICAgICBjYXNlIDM6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCksIHRydWU7XG4gICAgICBjYXNlIDY6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGkgPCBsZW47IGkrKykge1xuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZuLmFwcGx5KGxpc3RlbmVycy5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgLCBqO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyc1tpXS5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSk7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIpOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2NvbnRleHQ9dGhpc10gVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIGZhbHNlKTtcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHJldHVybiBhZGRMaXN0ZW5lcih0aGlzLCBldmVudCwgZm4sIGNvbnRleHQsIHRydWUpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIHRoaXM7XG4gIGlmICghZm4pIHtcbiAgICBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm4gJiZcbiAgICAgICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiZcbiAgICAgICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmbiB8fFxuICAgICAgICAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpIHx8XG4gICAgICAgIChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUub247XG5cbi8vXG4vLyBFeHBvc2UgdGhlIHByZWZpeC5cbi8vXG5FdmVudEVtaXR0ZXIucHJlZml4ZWQgPSBwcmVmaXg7XG5cbi8vXG4vLyBBbGxvdyBgRXZlbnRFbWl0dGVyYCB0byBiZSBpbXBvcnRlZCBhcyBtb2R1bGUgbmFtZXNwYWNlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5pZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBtb2R1bGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=