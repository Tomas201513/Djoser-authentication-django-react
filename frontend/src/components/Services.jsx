import React from 'react'
// import Input from './elements/Input'
import { useState } from 'react';
// import Button from './elements/Button';

const Services = () => {
    const [service_identifier, setServiceIdentifier] =
        useState('');
    const [service_description, setServiceDescription] =
        useState('');

    return (
        <>
            <div class="mx-auto rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
                <table class="table-auto border border-emerald-500">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 border border-y-emerald-500">Title</th>
                            <th class="px-4 py-2 border border-y-emerald-500">Author</th>
                            <th class="px-4 py-2 border border-y-emerald-500">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-4 py-2  font-medium">Intro to CSS</td>
                            <td class="px-4 py-2  font-medium">Adam</td>
                            <td class="px-4 py-2  font-medium">858</td>
                        </tr>
                        <tr class="bg-emerald-200">
                            <td class="px-4 py-2  font-medium">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                            <td class="px-4 py-2  font-medium">Adam</td>
                            <td class="px-4 py-2  font-medium">112</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2  font-medium">Intro to JavaScript</td>
                            <td class="px-4 py-2  font-medium">Chris</td>
                            <td class="px-4 py-2  font-medium">1,280</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='Modal' className='hidden'>
                <form>
                    {/* <Input
                        label='Service Identifier'
                        type='text'
                        placeholder='Service Indentifier...'
                        value={service_identifier}
                        onChange={(e) =>
                            setServiceIdentifier(e.target.value)}
                    />
                    <Input
                        label='Service Description'
                        type='text'
                        placeholder='Service Description...'
                        value={service_description}
                        onChange={(e) =>
                            setServiceDescription(e.target.value)}
                    /> */}
                    {/* <Button
                        type='submit'
                        title='Create'
                    /> */}
                </form>
            </div>
        </>
    )
}

export default Services 