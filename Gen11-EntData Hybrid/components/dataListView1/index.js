'use strict';

app.dataListView1 = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_dataListView1
// END_CUSTOM_CODE_dataListView1
(function(parent) {
    var dataProvider = app.data.json,
        dataSourceOptions = {
            type: 'json',
            transport: {
                read: {
                    url: dataProvider.url
                }
            },

            schema: {
                data: 'query.diagnostics.url',
                model: {
                    fields: {
                        'content': {
                            field: 'content',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListView1Model = kendo.observable({
            dataSource: dataSource
        });

    parent.set('dataListView1Model', dataListView1Model);
})(app.dataListView1);

// START_CUSTOM_CODE_dataListView1Model
// END_CUSTOM_CODE_dataListView1Model