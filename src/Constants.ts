export const MENUS = {
    LEFT_DRAWER: [
        {
            key: 'productCatalog',
            name: 'Product',
            open: false,
            submenus: [
                {
                    key: 'product_search_l1',
                    name: 'L1'
                },
                {
                    key: 'product_search_l2',
                    name: 'L2'
                },
                {
                    key: 'product_search_l3',
                    name: 'L3'
                }
            ]
        },
        {
            key: 'taxonomy',
            name: 'Taxonomy',
            open: false,            
            submenus: [
                {
                    key: 'taxonomyMaintenance',
                    name: 'Taxonomy Maintenance'
                },
                {
                    key: 'assignmentList',
                    name: 'Assignment List'
                }
            ]
        },
        {
            key: 'attributeManagement',
            name: 'Management',
            open: false,            
            submenus: [
                {
                    key: 'flagManagement',
                    name: 'Flags',
                },
                {
                    key: 'tagManagement',
                    name: 'Tags',
                }
            ]
        },
        {
            key: 'upload',
            name: 'Upload',
            open: false,
            submenus: [
                { 
                    key: 'upload',
                    name: 'Upload' 
                },
                { 
                    key: 'history',
                    name: 'History' 
                }
            ]
        },
        {
            key: 'download',
            name: 'Download',
            open: false,
            submenus: [
                {
                    key: 'exportProductDetails',
                    name: 'Product Details'
                },
                {
                    key: 'exportFlags',
                    name: 'Flags' 
                },
                { 
                    key: 'exportTags', 
                    name: 'Tags'
                },
                {
                    key: 'downloadTaxonomy',                    
                    name: 'Taxonomy',
                }
            ]
        }
    ]
};
