function isArgumentsValidTypes(argumentsObject, validTypes) {
	return Object.keys(argumentsObject).every(function (arg, i) {
		return (Object.prototype.toString.call(argumentsObject[arg]) === ('[object ' + validTypes[Object.keys(validTypes)[i]] + ']'));
	});
}

/**
 * @name PermissionTree
 * @constructor
 */
function PermissionTree() {
	this._permissions = {};
	this._roles = {};
}

PermissionTree.prototype.createPermission = function (resourceType, resourceID, action) {
	if (!isArgumentsValidTypes(arguments, {
		resourceType: 'String',
		resourceID: 'String',
		action: 'String'
	})) {
		throw new Error('Arguments has invalid type.');
	}

	if (!this._permissions[resourceType]) {
		this._permissions[resourceType] = {};
	}

	if (Object.prototype.toString.call(this._permissions[resourceType]) !== '[object Object]') {
		throw new Error('Permission type has invalid type. Must be a object.');
	}

	if (!this._permissions[resourceType][resourceID]) {
		this._permissions[resourceType][resourceID] = [];
	}

	this._permissions[resourceType][resourceID].push(action);
};

PermissionTree.prototype.createRole = function (roleName) {
	if (!isArgumentsValidTypes(arguments, {
		roleName: 'String'
	})) {
		throw new Error('Arguments has invalid type.');
	}

	if (this._roles[roleName]) {
		return;
	}

	this._roles[roleName] = [];
};

PermissionTree.prototype.assignPermissionToRole = function (roleName, permission) {
	if (!isArgumentsValidTypes(arguments, {
		roleName: 'String',
		permission: 'String'
	})) {
		throw new Error('Arguments has invalid type.');
	}

	if (!this._roles[roleName]) {
		throw new Error('Role is not defined.');
	}

	var tuple = permission.split(':');

	if (!this._permissions[tuple[0]] || !this._permissions[tuple[0]][tuple[1]] || (this._permissions[tuple[0]][tuple[1]].indexOf(tuple[2]) < 0)) {
		throw new Error('Permission (' + permission + ') is not defined.');
	}

	if (this._roles[roleName].indexOf(tuple) > -1) {
		return;
	}

	this._roles[roleName].push(permission);
};


module.exports.PermissionTree = PermissionTree;