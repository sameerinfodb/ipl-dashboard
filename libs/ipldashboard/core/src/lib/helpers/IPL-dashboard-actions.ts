import { IPLDashboardAction } from '../interfaces/action.interface';
import { IPLDashboardActionTypes } from '../enums/IPL-dashboard-action.-types.enum';

export namespace actions {
  export const addAction: IPLDashboardAction = {
    type: IPLDashboardActionTypes.add,
    label: 'Add'
  };

  export const editAction: IPLDashboardAction = {
    type: IPLDashboardActionTypes.edit,
    label: 'Edit'
  };

  export const deleteAction: IPLDashboardAction = {
    type: IPLDashboardActionTypes.delete,
    label: 'Delete'
  };

  export const dismissAction: IPLDashboardAction = {
    type: IPLDashboardActionTypes.dismissChanges,
    label: 'Dismiss'
  };

  export const saveAction: IPLDashboardAction = {
    type: IPLDashboardActionTypes.saveChanges,
    label: 'Save'
  };
}
