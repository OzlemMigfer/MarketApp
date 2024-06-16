import supabase from '../../services/supabase';

export const fetchBranch = async () => {
    try {
        const { data, error, status } = await supabase
            .from('marketBranch')
            .select('*');

        console.log('Service data:', data);
        return data;
    } catch (error) {
        console.error('Error branches:', error.message);
        return [];
    }
};

export const addBranch = async (branchName) => {
    try {
        const { data, error } = await supabase
            .from('marketBranch')
            .insert([{ branchName }]);

        if (error) {
            throw error;
        }

        return data[0];
    } catch (error) {
        console.error('Error adding branch:', error.message);
        throw error;
    }
};