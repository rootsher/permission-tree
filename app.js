var PermissionTree = require('./PermissionTree').PermissionTree;

var permissionTree = new PermissionTree();

try {
	permissionTree.createPermission('Product', '4e4a7acf-5605-4044-8096-1a3b6769d31c', 'create');
	permissionTree.createPermission('Product', '4407cec2-339e-46f0-9579-2e75056b4f5a', 'manage');

	permissionTree.createRole('root');
	permissionTree.createRole('employee');

	permissionTree.assignPermissionToRole('root', 'Product:4e4a7acf-5605-4044-8096-1a3b6769d31c:create');
	permissionTree.assignPermissionToRole('root', 'Product:4407cec2-339e-46f0-9579-2e75056b4f5a:manage');

	console.log(permissionTree._permissions);
	console.log(permissionTree._roles);
} catch (e) {
	console.error(e.message);
}