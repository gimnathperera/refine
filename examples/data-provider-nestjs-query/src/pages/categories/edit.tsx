import { IResourceComponentsProps } from "@refinedev/core";
import { Edit, ListButton, RefreshButton, useForm } from "@refinedev/antd";
import { GetFields } from "@refinedev/nestjs-query";

import { Form, Input } from "antd";

import { CATEGORY_EDIT_MUTATION } from "./queries";
import { CategoryEditMutation } from "graphql/types";

export const CategoryEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<
        GetFields<CategoryEditMutation>
    >({
        metaData: {
            gqlMutation: CATEGORY_EDIT_MUTATION,
        },
    });

    return (
        <Edit
            headerProps={{
                extra: (
                    <>
                        <ListButton />
                        <RefreshButton onClick={() => queryResult?.refetch()} />
                    </>
                ),
            }}
            saveButtonProps={saveButtonProps}
        >
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};
